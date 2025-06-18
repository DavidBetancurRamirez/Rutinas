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
    ImageSourcePropType,
} from 'react-native';
import { useRouter } from 'expo-router';
import GameFinished from '../GameFinished';

const { width, height } = Dimensions.get('window');
const characterWidth = width * 0.375;
const characterHeight = height * 0.6;
const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

// Define types early to avoid reference errors
type ClothingKey = 'shirt' | 'pants' | 'socks' | 'underwear';

type ClothingItem = {
    key: ClothingKey;
    source: ImageSourcePropType;
    style: ViewStyle;
};

type DraggableItemProps = {
    source: ImageSourcePropType;
    style: ViewStyle;
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
            }), onPanResponderRelease: (_: GestureResponderEvent, gesture: PanResponderGestureState) => {
                const { moveX, moveY, dx, dy } = gesture;

                const itemStyle = style as { left?: number; top?: number; width?: number; height?: number };
                const itemWidth = itemStyle.width || 80;
                const itemHeight = itemStyle.height || 80;
                const itemLeft = (itemStyle.left || 0) + dx;
                const itemTop = (itemStyle.top || 0) + dy;
                const itemRight = itemLeft + itemWidth;
                const itemBottom = itemTop + itemHeight;

                const targetLeft = characterDimensions.left;
                const targetTop = characterDimensions.top;
                const targetRight = targetLeft + characterDimensions.width;
                const targetBottom = targetTop + characterDimensions.height;

                const isOverlapping =
                    itemLeft < targetRight &&
                    itemRight > targetLeft &&
                    itemTop < targetBottom &&
                    itemBottom > targetTop;

                if (isOverlapping) {
                    onDrop(itemKey, moveX, moveY);
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

                const showerLeft = 15;
                const showerTop = 80;
                const showerRight = showerLeft + characterWidth * 1.2;
                const showerBottom = showerTop + characterHeight * 0.8;

                if (
                    moveX >= showerLeft &&
                    moveX <= showerRight &&
                    moveY >= showerTop &&
                    moveY <= showerBottom
                ) {
                    onEnterShower();
                } else {
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
                source={require('@/assets/images/Niño (Sin Ropa).webp')}
                style={styles.characterShower}
                resizeMode="contain"
            />
        </Animated.View>
    );
};

interface DraggableSoapProps {
    source: ImageSourcePropType;
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

const InteractivoDuchaH0: React.FC = () => {
    const router = useRouter();
    const [stage, setStage] = useState(1);
    const [messageVisible, setMessageVisible] = useState(true);
    const [showShowerStage, setShowShowerStage] = useState(false);
    const [showSoapStage, setShowSoapStage] = useState(false);
    const [hasEnteredShower, setHasEnteredShower] = useState(false);
    const [showerOn, setShowerOn] = useState(false);
    const [canTurnOnShower, setCanTurnOnShower] = useState(false);
    const [cleanedParts, setCleanedParts] = useState<string[]>([]);
    const [showDressUpStage, setShowDressUpStage] = useState<boolean>(false);
    const [removedClothes, setRemovedClothes] = useState<ClothingItem[]>([]);
    const [gameFinished, setGameFinished] = useState(false);
    const [clothes, setClothes] = useState<ClothingItem[]>([
        {
            key: 'underwear',
            source: require('@/assets/images/Ropa Interior (Hombre).webp'),
            style: stage1ClothingPositions.underwear,
        },
        {
            key: 'socks',
            source: require('@/assets/images/Medias.webp'),
            style: stage1ClothingPositions.socks,
        },
        {
            key: 'pants',
            source: require('@/assets/images/Pantalon Niño.webp'),
            style: stage1ClothingPositions.pants,
        },
        {
            key: 'shirt',
            source: require('@/assets/images/Buso Niño.webp'),
            style: stage1ClothingPositions.shirt,
        },
    ]);

    const handleShowerPress = () => {
        if (canTurnOnShower) {
            setShowerOn(true);
        }
    };

    const handleRetry = () => {
        setStage(1);
        setGameFinished(false);
        setMessageVisible(true);
        setShowShowerStage(false);
        setShowSoapStage(false);
        setHasEnteredShower(false);
        setShowerOn(false);
        setCanTurnOnShower(false);
        setCleanedParts([]);
        setShowDressUpStage(false);
        setRemovedClothes([]);
        setClothes([
            {
                key: 'underwear',
                source: require('@/assets/images/Ropa Interior (Hombre).webp'),
                style: stage1ClothingPositions.underwear,
            },
            {
                key: 'socks',
                source: require('@/assets/images/Medias.webp'),
                style: stage1ClothingPositions.socks,
            },
            {
                key: 'pants',
                source: require('@/assets/images/Pantalon Niño.webp'),
                style: stage1ClothingPositions.pants,
            },
            {
                key: 'shirt',
                source: require('@/assets/images/Buso Niño.webp'),
                style: stage1ClothingPositions.shirt,
            },
        ]);
        setFixedClothes({
            shirt: false,
            pants: false,
            socks: false,
            underwear: false,
        });
    };

    const handleDrop = (key: ClothingKey, moveX: number, moveY: number) => {
        setClothes((prev) => {
            const newClothes = prev.filter((item) => item.key !== key);
            setStage(1);
            const removedItem = prev.find((item) => item.key === key);
            if (removedItem) {
                setRemovedClothes((prevRemoved) => [...prevRemoved, removedItem]);
            }

            if (newClothes.length === 0) {
                setTimeout(() => {
                    setShowShowerStage(true);
                    setMessageVisible(false);
                    setStage(2);
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
                            width: characterWidth * 0.48,
                            height: characterHeight * 0.18,
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
            setStage(3);
        }, 2000);
    };

    const bodyParts = [
        {
            id: 'rostro',
            image: require('@/assets/images/Rostro.webp'),
            position: { top: 100, left: 140, width: 80, height: 80 },
        },
        {
            id: 'brazos',
            image: require('@/assets/images/Brazos.webp'),
            position: { top: 200, left: 40, width: 100, height: 80 },
        },
        {
            id: 'axilas',
            image: require('@/assets/images/Axilas.webp'),
            position: { top: 200, left: 240, width: 80, height: 80 },
        },
        {
            id: 'nalgas',
            image: require('@/assets/images/Nalgas.webp'),
            position: { top: 300, left: 140, width: 90, height: 90 },
        },
        {
            id: 'pies',
            image: require('@/assets/images/Pies.webp'),
            position: { top: 400, left: 140, width: 80, height: 70 },
        },
    ];

    const markBodyPartAsClean = (part: string) => () => {
        setCleanedParts((prev) => {
            if (!prev.includes(part)) {
                const updated = [...prev, part];
                if (updated.length === 5) {
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
                setStage(4);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showerOn]);

    useEffect(() => {
        if (showDressUpStage && Object.values(fixedClothes).every((fixed) => fixed)) {
            const timer = setTimeout(() => {
                setGameFinished(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [fixedClothes, showDressUpStage]);

    return (
        <View style={styles.container}>
            <GameFinished
                onBack={() => router.back()}
                onClose={() => setGameFinished(false)}
                onRetry={handleRetry}
                subtitle="Has completado la rutina correctamente"
                visible={gameFinished}
            />
            {stage === 1 ? (
                <>
                    <Text style={styles.instructions}>
                        Arrastra la ropa sucia y ponla en el cesto 🧺
                    </Text>
                    <Image
                        source={require('@/assets/images/Niño (Sin Ropa).webp')}
                        style={styles.character}
                    />
                    <Image
                        source={require('@/assets/images/Cesto de Ropa.webp')}
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
                                top: characterHeight * 0.3,
                                left: 10,
                                width: characterWidth * 1.2,
                                height: characterHeight * 0.8,
                            }}
                        />
                    ))}
                    {messageVisible && clothes.length === 0 && (
                        <Text style={styles.message}>¡Muy bien!</Text>
                    )}
                </>
            ) : stage === 2 ? (
                <>
                    <DraggableCharacter onEnterShower={handleEnterShower} />
                    <Text style={styles.instructions}>
                        Entra a la ducha arrastrando al personaje 🚿
                    </Text>
                    {hasEnteredShower && (
                        <Text style={styles.message}>¡Excelente trabajo!</Text>
                    )}
                    <Image
                        source={require('@/assets/images/Ducha (Afuera).webp')}
                        style={styles.shower}
                    />
                </>
            ) : stage === 3 ? (
                <>
                    <Text style={styles.instructions}>
                        {canTurnOnShower
                            ? '¡Buen trabajo! Ahora presiona la ducha para enjuagarte 🚿'
                            : `¡Hora de enjabonarse! 🧼 Limpia todas las partes del cuerpo (${cleanedParts.length}/5)`}
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
                        source={require('@/assets/images/Jabon.webp')}
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
                                    ? require('@/assets/images/Ducha (Adentro) prendida.webp')
                                    : require('@/assets/images/Ducha (Adentro) apagada.webp')
                            }
                            style={styles.showerOver}
                        />
                    </TouchableOpacity>
                    {showerOn && (
                        <Text style={styles.message}>¡Ya estás limpio! 🎉</Text>
                    )}
                </>
            ) : stage === 4 ? (
                <>
                    <Text style={styles.instructions}>
                        ¡Hora de vestirse! 👕 Arrastra cada prenda al personaje.
                    </Text>
                    <Image
                        source={require('@/assets/images/Niño (Sin Ropa).webp')}
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
                                    left: width - characterWidth - 10,
                                    width: characterWidth * 1.5,
                                    height: characterHeight * 1.5,
                                }}
                            />
                        )
                    ))}
                </>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BEE3F8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameFinishedContainer: {
        flex: 1,
        marginTop: 200,
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 30,
    },
    character: {
        position: 'absolute',
        width: characterWidth,
        height: characterHeight,
        resizeMode: 'contain',
        left: width - characterWidth - 10,
        top: 80,
        zIndex: 0,
    },
    basket: {
        position: 'absolute',
        width: characterWidth * 1.2,
        height: characterHeight * 0.8,
        resizeMode: 'contain',
        left: 10,
        top: characterHeight * 0.3,
        zIndex: 8,
    },
    message: {
        position: 'absolute',
        bottom: 20, // Adjusted to ensure visibility
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
        width: characterWidth * 1.2,
        height: characterHeight * 0.8,
        resizeMode: 'contain',
        left: 15,
        top: 80,
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
        bottom: 20, // Adjusted to ensure visibility
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

const stage1ClothingPositions: Record<ClothingKey, ViewStyle> = {
    shirt: {
        ...styles.clothesItem,
        width: characterWidth * 0.6,
        height: characterHeight * 0.48,
        left: width - characterWidth - 10 + (characterWidth * 0.4) / 2,
        top: characterHeight * 0.35,
        zIndex: 14,
    },
    pants: {
        ...styles.clothesItem,
        width: characterWidth * 0.6,
        height: characterHeight * 0.312,
        left: width - characterWidth - 10 + (characterWidth * 0.4) / 2,
        top: characterHeight * 0.60,
        zIndex: 13,
    },
    underwear: {
        ...styles.clothesItem,
        width: characterWidth * 0.6,
        height: characterHeight * 0.09,
        left: width - characterWidth - 10 + (characterWidth * 0.4) / 2,
        top: characterHeight * 0.62,
        zIndex: 12,
    },
    socks: {
        ...styles.clothesItem,
        width: characterWidth * 0.6,
        height: characterHeight * 0.18,
        left: width - characterWidth - 10 + (characterWidth * 0.4) / 2,
        top: characterHeight * 0.80,
        zIndex: 11,
    },
};

export default InteractivoDuchaH0;