import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Platform,
    Text,
    Animated,
    PanResponder,
    GestureResponderEvent,
    PanResponderGestureState,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const characterWidth = width * 0.25;
const characterHeight = height * 0.4;
const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

// Define clothing key type
type ClothingKey = 'shirt' | 'pants' | 'socks' | 'underwear';

type ClothingItem = {
    key: ClothingKey;
    source: any;
    style: object;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BEE3F8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    character: {
        position: 'absolute',
        width: characterWidth,
        height: characterHeight,
        resizeMode: 'contain',
        left: (width - characterWidth) / 2,
        top: 80,
        zIndex: 0,
    },
    basket: {
        position: 'absolute',
        width: characterWidth * 1.5,
        height: characterHeight,
        resizeMode: 'contain',
        left: 10,
        top: characterHeight * 0.5,
        zIndex: 8,
    },
    message: {
        position: 'absolute',
        bottom: -400,
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2F855A',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        zIndex: 12,
    },
    instructions: {
        position: 'absolute',
        top: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 12,
        paddingVertical: 8,
        zIndex: 12,
    },
    shower: {
        position: 'absolute',
        width: characterWidth * 1.8,
        height: characterHeight,
        resizeMode: 'contain',
        left: 10,
        top: characterHeight * 0.4,
        zIndex: 10,
    },
    clothesItem: {
        position: 'absolute',
    },
    characterShower: {
        position: 'absolute',
        width: characterWidth,
        height: characterHeight,
        resizeMode: 'contain',
        left: (width - characterWidth) / 3.4,
        top: 80,
        zIndex: 10,
    },
    finalMessage: {
        position: 'absolute',
        bottom: -400,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2F855A',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        textAlign: 'center',
        zIndex: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    showerOver: {
        position: 'absolute',
        top: 50,
        left: (width - 400) / 2,
        width: 140,
        height: 150,
        resizeMode: 'contain',
    },
    soap: {
        position: 'absolute',
    },
    bodyPart: {
        position: 'absolute',
        width: 80,
        height: 80,
    },
    cleanedBodyPart: {
        opacity: 0,
        borderColor: 'limegreen',
        borderWidth: 2,
        borderRadius: 10,
    },
    draggableItem: {
        width: 80,
        height: 80,
        margin: 10,
    },
    clothesFixed: {
        position: 'absolute',
        width: characterWidth,
        height: characterHeight * 0.3,
        resizeMode: 'contain',
    },
    fixedClothingContainer: {
        position: 'absolute',
    },
    fixedClothingImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

// Define stage 1 clothing positions for reuse in stage 4 with zIndex for layering
const stage1ClothingPositions: Record<ClothingKey, object> = {
    shirt: {
        ...styles.clothesItem,
        width: characterWidth * 1.2, // Increased size by 20%
        height: characterHeight * 0.96, // Increased size by 20%
        left: (width - characterWidth * 1.2) / 2, // Adjusted left to center the larger size
        top: characterHeight * 0.25, // Moved slightly downward
        zIndex: 14, // Topmost layer
    },
    pants: {
        ...styles.clothesItem,
        width: characterWidth,
        height: characterHeight * 0.52,
        left: (width - characterWidth) / 2,
        top: characterHeight * 0.32, // Moved upward
        zIndex: 13, // Below shirt
    },
    underwear: {
        ...styles.clothesItem,
        width: characterWidth,
        height: characterHeight * 0.15,
        left: (width - characterWidth) / 2,
        top: characterHeight * 0.73, // Unchanged
        zIndex: 12, // Below pants
    },
    socks: {
        ...styles.clothesItem,
        width: characterWidth,
        height: characterHeight * 0.3,
        left: (width - characterWidth) / 2,
        top: characterHeight * 1.0, // Unchanged
        zIndex: 11, // Bottommost layer
    },
};

type DraggableItemProps = {
    source: any;
    style: object;
    onDrop: (itemKey: ClothingKey, moveX: number, moveY: number) => void;
    itemKey: ClothingKey;
    characterDimensions: { top: number; left: number; width: number; height: number };
};

const DraggableItem: React.FC<DraggableItemProps> = ({
    source,
    style,
    onDrop,
    itemKey,
    characterDimensions,
}) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_: GestureResponderEvent, gesture: PanResponderGestureState) => {
                const { moveX, moveY, dx, dy } = gesture;

                // Get clothing item's dimensions from style
                const itemStyle = style as { left?: number; top?: number; width?: number; height?: number };
                const itemWidth = itemStyle.width || 80;
                const itemHeight = itemStyle.height || 80;
                const itemLeft = (itemStyle.left || 0) + dx;
                const itemTop = (itemStyle.top || 0) + dy;
                const itemRight = itemLeft + itemWidth;
                const itemBottom = itemTop + itemHeight;

                // Character's bounding box
                const targetLeft = characterDimensions.left;
                const targetTop = characterDimensions.top;
                const targetRight = targetLeft + characterDimensions.width;
                const targetBottom = targetTop + characterDimensions.height;

                // Check for rectangle overlap
                const isOverlapping =
                    itemLeft < targetRight &&
                    itemRight > targetLeft &&
                    itemTop < targetBottom &&
                    itemBottom > targetTop;

                if (isOverlapping) {
                    onDrop(itemKey, moveX, moveY);
                    // Reset pan transform to prevent offset after drop
                    pan.setValue({ x: 0, y: 0 });
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <Animated.View
            style={[style, { transform: pan.getTranslateTransform() }]}
            {...panResponder.panHandlers}
        >
            <Image source={source} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </Animated.View>
    );
};

const DraggableCharacter = ({ onEnterShower }: { onEnterShower: () => void }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_: GestureResponderEvent, gesture: PanResponderGestureState) => {
                const { moveX, moveY } = gesture;

                // Define shower area boundaries
                const showerLeft = 10;
                const showerTop = characterHeight * 0.5;
                const showerRight = showerLeft + characterWidth * 1.2;
                const showerBottom = showerTop + characterHeight * 1.5;

                // Check if the character is dropped in the shower area
                if (
                    moveX >= showerLeft &&
                    moveX <= showerRight &&
                    moveY >= showerTop &&
                    moveY <= showerBottom
                ) {
                    onEnterShower();
                } else {
                    // Reset position with spring animation
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 7,
                        tension: 40,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <Animated.View
            style={[
                {
                    transform: pan.getTranslateTransform(),
                },
                Platform.select({
                    ios: {},
                    android: {},
                }),
            ]}
            {...panResponder.panHandlers}
        >
            <Image
                source={require('@/assets/images/Chica (Sin Ropa).png')}
                style={styles.characterShower}
                resizeMode="contain"
            />
        </Animated.View>
    );
};

interface DraggableSoapProps {
    source: any;
    position: { top: number; left: number };
    bodyParts: {
        id: string;
        position: { top: number; left: number; width: number; height: number };
    }[];
    onScrub: (targetId: string) => void;
}

const DraggableSoap: React.FC<DraggableSoapProps> = ({
    source,
    position,
    bodyParts,
    onScrub,
}) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gesture) => {
                const currentX = position.left + gesture.dx;
                const currentY = position.top + gesture.dy;

                bodyParts.forEach((part) => {
                    const { left, top, width, height } = part.position;

                    const withinX = currentX + 40 >= left && currentX <= left + width;
                    const withinY = currentY + 40 >= top && currentY <= top + height;

                    if (withinX && withinY) {
                        onScrub(part.id);
                    }
                });

                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: pan.getTranslateTransform(),
    };

    return (
        <Animated.View style={animatedStyle} {...panResponder.panHandlers}>
            <Image source={source} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
        </Animated.View>
    );
};

const InteractivoDuchaM12: React.FC = () => {
    const navigation = useNavigation();
    const [messageVisible, setMessageVisible] = useState(true);
    const [showShowerStage, setShowShowerStage] = useState(false);
    const [showSoapStage, setShowSoapStage] = useState(false);
    const [hasEnteredShower, setHasEnteredShower] = useState(false);
    const [showerOn, setShowerOn] = useState(false);
    const [canTurnOnShower, setCanTurnOnShower] = useState(false);
    const [cleanedParts, setCleanedParts] = useState<string[]>([]);
    const [showDressUpStage, setShowDressUpStage] = useState<boolean>(false);
    const [removedClothes, setRemovedClothes] = useState<ClothingItem[]>([]);
    const [clothes, setClothes] = useState<ClothingItem[]>([
        {
            key: 'underwear',
            source: require('@/assets/images/Ropa Interior (Mujer).png'),
            style: stage1ClothingPositions.underwear,
        },
        {
            key: 'socks',
            source: require('@/assets/images/Medias.png'),
            style: stage1ClothingPositions.socks,
        },
        {
            key: 'pants',
            source: require('@/assets/images/Brasier.png'),
            style: stage1ClothingPositions.pants,
        },
        {
            key: 'shirt',
            source: require('@/assets/images/Vestido.png'),
            style: stage1ClothingPositions.shirt,
        },
    ]);

    const handleShowerPress = () => {
        if (canTurnOnShower) {
            setShowerOn(true);
        }
    };

    const handleDrop = (key: ClothingKey, moveX: number, moveY: number) => {
        setClothes((prev) => {
            const newClothes = prev.filter((item) => item.key !== key);

            const removedItem = prev.find((item) => item.key === key);
            if (removedItem) {
                setRemovedClothes((prevRemoved) => [...prevRemoved, removedItem]);
            }

            if (newClothes.length === 0) {
                setTimeout(() => {
                    setShowShowerStage(true);
                    setMessageVisible(false);
                }, 2000);
            }

            return newClothes;
        });
    };

    useEffect(() => {
        if (showDressUpStage) {
            const leftSidePositions = [
                { key: 'shirt' as ClothingKey, top: 100 },
                { key: 'pants' as ClothingKey, top: 200 },
                { key: 'socks' as ClothingKey, top: 300 },
                { key: 'underwear' as ClothingKey, top: 400 },
            ];

            setClothes((prevClothes) => [
                ...prevClothes,
                ...removedClothes.map((item) => {
                    const position = leftSidePositions.find((pos) => pos.key === item.key);
                    return {
                        ...item,
                        style: {
                            ...styles.clothesItem,
                            width: characterWidth * 0.8,
                            height: characterHeight * 0.3,
                            left: 10,
                            top: position ? position.top : 100,
                        },
                    };
                }),
            ]);
            setRemovedClothes([]);
        }
    }, [showDressUpStage]);

    const handleEnterShower = () => {
        setHasEnteredShower(true);
        setTimeout(() => {
            setShowSoapStage(true);
        }, 2000);
    };

    const bodyParts = [
        {
            id: 'rostro',
            image: require('@/assets/images/Rostro Mujer.png'),
            position: { top: 100, left: 140, width: 80, height: 80 },
        },
        {
            id: 'brazos',
            image: require('@/assets/images/Brazos.png'),
            position: { top: 200, left: 40, width: 100, height: 80 },
        },
        {
            id: 'axilas',
            image: require('@/assets/images/Axilas.png'),
            position: { top: 200, left: 240, width: 80, height: 80 },
        },
        {
            id: 'nalgas',
            image: require('@/assets/images/Nalgas.png'),
            position: { top: 300, left: 180, width: 90, height: 90 },
        },
        {
            id: 'vagina',
            image: require('@/assets/images/Vagina.png'),
            position: { top: 300, left: 100, width: 70, height: 70 },
        },
        {
            id: 'pies',
            image: require('@/assets/images/Pies.png'),
            position: { top: 400, left: 100, width: 80, height: 70 },
        },
        {
            id: 'pechos',
            image: require('@/assets/images/Pecho.png'),
            position: { top: 400, left: 180, width: 80, height: 70 },
        },
    ];

    const markBodyPartAsClean = (part: string) => () => {
        setCleanedParts((prev) => {
            if (!prev.includes(part)) {
                const updated = [...prev, part];
                if (updated.length === 7) {
                    setCanTurnOnShower(true);
                }
                return updated;
            }
            return prev;
        });
    };

    const [fixedClothes, setFixedClothes] = useState<Record<ClothingKey, boolean>>({
        shirt: false,
        pants: false,
        socks: false,
        underwear: false,
    });

    const handleDressUpDrop = (itemKey: ClothingKey, dropX: number, moveY: number) => {
        setFixedClothes((prev) => ({
            ...prev,
            [itemKey]: true,
        }));
        setClothes((prev) =>
            prev.map((item) =>
                item.key === itemKey
                    ? {
                        ...item,
                        style: stage1ClothingPositions[itemKey],
                    }
                    : item
            )
        );
    };

    useEffect(() => {
        if (showerOn) {
            const timer = setTimeout(() => {
                setShowDressUpStage(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showerOn]);

    useEffect(() => {
        if (Object.values(fixedClothes).every((fixed) => fixed)) {
            const timer = setTimeout(() => {
                navigation.goBack();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [fixedClothes, navigation]);

    return (
        <View style={styles.container}>
            {!showShowerStage && !showSoapStage && !showDressUpStage ? (
                <>
                    <Text style={styles.instructions}>
                        Arrastra la ropa sucia y ponla en el cesto 🧺
                    </Text>

                    <Image
                        source={require('@/assets/images/Chica (Sin Ropa).png')}
                        style={styles.character}
                    />

                    <Image
                        source={require('@/assets/images/Cesto de Ropa.png')}
                        style={styles.basket}
                    />

                    {clothes.map((item) => (
                        <DraggableItem
                            key={item.key}
                            source={item.source}
                            style={item.style}
                            onDrop={handleDrop}
                            itemKey={item.key}
                            characterDimensions={{
                                top: characterHeight * 0.5,
                                left: 10,
                                width: characterWidth * 1.5,
                                height: characterHeight,
                            }}
                        />
                    ))}

                    {messageVisible && clothes.length === 0 && (
                        <Text style={styles.message}>¡Muy bien!</Text>
                    )}
                </>
            ) : showShowerStage && !showSoapStage && !showDressUpStage ? (
                <>
                    <DraggableCharacter onEnterShower={handleEnterShower} />
                    <Text style={styles.instructions}>
                        Entra a la ducha arrastrando al personaje 🚿
                    </Text>
                    {hasEnteredShower && (
                        <Text style={styles.message}>¡Excelente trabajo!</Text>
                    )}

                    <Image
                        source={require('@/assets/images/Ducha (Afuera).png')}
                        style={styles.shower}
                    />
                </>
            ) : !showDressUpStage ? (
                <>
                    <Text style={styles.instructions}>
                        {canTurnOnShower
                            ? '¡Buen trabajo! Ahora presiona la ducha para enjuagarte 🚿'
                            : `¡Hora de enjabonarse! 🧼 Limpia todas las partes del cuerpo (${cleanedParts.length}/7)`}
                    </Text>

                    {bodyParts.map((part) => (
                        <Image
                            key={part.id}
                            source={part.image}
                            style={[
                                {
                                    position: 'absolute',
                                    top: part.position.top,
                                    left: part.position.left,
                                    width: part.position.width,
                                    height: part.position.height,
                                    resizeMode: 'contain',
                                },
                                cleanedParts.includes(part.id) && { opacity: 0.5 },
                            ]}
                        />
                    ))}

                    <DraggableSoap
                        source={require('@/assets/images/Jabon.png')}
                        position={{ top: 200, left: 140 }}
                        bodyParts={bodyParts}
                        onScrub={(targetId: string) => {
                            if (targetId && !cleanedParts.includes(targetId)) {
                                markBodyPartAsClean(targetId)();
                            }
                        }}
                    />

                    <TouchableOpacity onPress={handleShowerPress} disabled={!canTurnOnShower}>
                        <Image
                            source={
                                showerOn
                                    ? require('@/assets/images/Ducha (Adentro) prendida.png')
                                    : require('@/assets/images/Ducha (Adentro) apagada.png')
                            }
                            style={styles.showerOver}
                        />
                    </TouchableOpacity>
                    {showerOn && (
                        <Text style={styles.message}>¡Ya estás limpia! 🎉</Text>
                    )}
                </>
            ) : (
                <>
                    <Text style={styles.instructions}>
                        ¡Hora de vestirse! 👕 Arrastra cada prenda al personaje.
                    </Text>
                    <Image
                        source={require('@/assets/images/Chica (Sin Ropa).png')}
                        style={styles.character}
                    />
                    {clothes.map((item) => (
                        fixedClothes[item.key] ? (
                            <View key={item.key} style={[styles.fixedClothingContainer, item.style]}>
                                <Image
                                    source={item.source}
                                    style={styles.fixedClothingImage}
                                />
                            </View>
                        ) : (
                            <DraggableItem
                                key={item.key}
                                source={item.source}
                                style={item.style}
                                onDrop={handleDressUpDrop}
                                itemKey={item.key}
                                characterDimensions={{
                                    top: 80,
                                    left: (width - characterWidth) / 2,
                                    width: characterWidth * 1.5,
                                    height: characterHeight * 1.5,
                                }}
                            />
                        )
                    ))}
                    {Object.values(fixedClothes).every((fixed) => fixed) && (
                        <Text style={styles.finalMessage}>¡Listo! Estás vestida 🎉</Text>
                    )}
                </>
            )}
        </View>
    );
};

export default InteractivoDuchaM12;