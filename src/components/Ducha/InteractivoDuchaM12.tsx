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
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import GameFinished from '../GameFinished';

const { width, height } = Dimensions.get('window');
const characterWidth = width * 0.25;
const characterHeight = height * 0.4;
const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

// Get screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Define reference dimensions
const REFERENCE_WIDTH = 360;
const REFERENCE_HEIGHT = 640;

// Scale factor for responsive positioning
const scaleX = SCREEN_WIDTH / REFERENCE_WIDTH;
const scaleY = SCREEN_HEIGHT / REFERENCE_HEIGHT;

// Define types
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
            }),
            onPanResponderRelease: (_: GestureResponderEvent, gesture: PanResponderGestureState) => {
                const { moveX, moveY, dx, dy } = gesture;

                const itemStyle = style as { left?: number; top?: number; width?: number; height?: number };
                const itemWidth = itemStyle.width || 80 * scaleX;
                const itemHeight = itemStyle.height || 80 * scaleY;
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

                const showerLeft = 10 * scaleX;
                const showerTop = characterHeight * 0.5;
                const showerRight = showerLeft + characterWidth * 1.2;
                const showerBottom = showerTop + characterHeight * 1.5;

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
                source={require('@/assets/images/Chica (Sin Ropa).webp')}
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
                const currentX = (position.left * scaleX) + gesture.dx;
                const currentY = (position.top * scaleY) + gesture.dy;

                bodyParts.forEach((part) => {
                    const { left, top, width, height } = part.position;

                    const soapCenterX = currentX + (80 * scaleX) / 2;
                    const soapCenterY = currentY + (80 * scaleY) / 2;

                    const withinX = soapCenterX >= left && soapCenterX <= left + width;
                    const withinY = soapCenterY >= top && soapCenterY <= top + height;

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
        top: position.top * scaleY,
        left: position.left * scaleX,
        transform: pan.getTranslateTransform(),
    };

    return (
        <Animated.View style={animatedStyle} {...panResponder.panHandlers}>
            <Image source={source} style={{ width: 80 * scaleX, height: 80 * scaleY, resizeMode: 'contain' }} />
        </Animated.View>
    );
};

const InteractivoDuchaM12: React.FC = () => {
    const navigation = useNavigation();
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
    const [gameFinished, setGameFinished] = useState(false);
    const [removedClothes, setRemovedClothes] = useState<ClothingItem[]>([]);
    const [clothes, setClothes] = useState<ClothingItem[]>([
        {
            key: 'underwear',
            source: require('@/assets/images/Ropa Interior (Mujer).webp'),
            style: stage1ClothingPositions.underwear,
        },
        {
            key: 'socks',
            source: require('@/assets/images/Medias.webp'),
            style: stage1ClothingPositions.socks,
        },
        {
            key: 'pants',
            source: require('@/assets/images/Brasier.webp'),
            style: stage1ClothingPositions.pants,
        },
        {
            key: 'shirt',
            source: require('@/assets/images/Vestido.webp'),
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
        setMessageVisible(true);
        setShowShowerStage(false);
        setShowSoapStage(false);
        setHasEnteredShower(false);
        setShowerOn(false);
        setCanTurnOnShower(false);
        setCleanedParts([]);
        setShowDressUpStage(false);
        setGameFinished(false);
        setRemovedClothes([]);
        setClothes([
            {
                key: 'underwear',
                source: require('@/assets/images/Ropa Interior (Mujer).webp'),
                style: stage1ClothingPositions.underwear,
            },
            {
                key: 'socks',
                source: require('@/assets/images/Medias.webp'),
                style: stage1ClothingPositions.socks,
            },
            {
                key: 'pants',
                source: require('@/assets/images/Brasier.webp'),
                style: stage1ClothingPositions.pants,
            },
            {
                key: 'shirt',
                source: require('@/assets/images/Vestido.webp'),
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
                { key: 'shirt' as ClothingKey, top: 100 * scaleY },
                { key: 'pants' as ClothingKey, top: 200 * scaleY },
                { key: 'socks' as ClothingKey, top: 300 * scaleY },
                { key: 'underwear' as ClothingKey, top: 400 * scaleY },
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
                            left: 10 * scaleX,
                            top: position ? position.top : 100 * scaleY,
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
            image: require('@/assets/images/Rostro Mujer.webp'),
            position: {
                top: 100 * scaleY,
                left: 140 * scaleX,
                width: 80 * scaleX,
                height: 80 * scaleY,
            },
        },
        {
            id: 'brazos',
            image: require('@/assets/images/Brazos.webp'),
            position: {
                top: 200 * scaleY,
                left: 40 * scaleX,
                width: 100 * scaleX,
                height: 80 * scaleY,
            },
        },
        {
            id: 'axilas',
            image: require('@/assets/images/Axilas.webp'),
            position: {
                top: 200 * scaleY,
                left: 240 * scaleX,
                width: 80 * scaleX,
                height: 80 * scaleY,
            },
        },
        {
            id: 'nalgas',
            image: require('@/assets/images/Nalgas.webp'),
            position: {
                top: 300 * scaleY,
                left: 180 * scaleX,
                width: 90 * scaleX,
                height: 90 * scaleY,
            },
        },
        {
            id: 'vagina',
            image: require('@/assets/images/Vagina.webp'),
            position: {
                top: 300 * scaleY,
                left: 100 * scaleX,
                width: 70 * scaleX,
                height: 70 * scaleY,
            },
        },
        {
            id: 'pies',
            image: require('@/assets/images/Pies.webp'),
            position: {
                top: 400 * scaleY,
                left: 100 * scaleX,
                width: 80 * scaleX,
                height: 70 * scaleY,
            },
        },
        {
            id: 'pechos',
            image: require('@/assets/images/Pecho.webp'),
            position: {
                top: 400 * scaleY,
                left: 180 * scaleX,
                width: 80 * scaleX,
                height: 70 * scaleY,
            },
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
                onBack={() => navigation.goBack()}
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
                        source={require('@/assets/images/Chica (Sin Ropa).webp')}
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
                                top: characterHeight * 0.5,
                                left: 10 * scaleX,
                                width: characterWidth * 1.5,
                                height: characterHeight,
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
                        <Text style={styles.message}>¡Ya estás limpia! 🎉</Text>
                    )}
                </>
            ) : stage === 4 ? (
                <>
                    <Text style={styles.instructions}>
                        ¡Hora de vestirse! 👕 Arrastra cada prenda al personaje.
                    </Text>
                    <Image
                        source={require('@/assets/images/Chica (Sin Ropa).webp')}
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
                                    top: 80 * scaleY,
                                    left: (width - characterWidth) / 2,
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
    character: {
        position: 'absolute',
        width: characterWidth,
        height: characterHeight,
        resizeMode: 'contain',
        left: (width - characterWidth) / 2,
        top: 80 * scaleY,
        zIndex: 0,
    },
    basket: {
        position: 'absolute',
        width: characterWidth * 1.5,
        height: characterHeight,
        resizeMode: 'contain',
        left: 10 * scaleX,
        top: characterHeight * 0.5,
        zIndex: 8,
    },
    message: {
        position: 'absolute',
        top: 300 * scaleY,
        alignSelf: 'center',
        fontSize: 28 * Math.min(scaleX, scaleY),
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
        top: 10 * scaleY,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 20 * Math.min(scaleX, scaleY),
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
        left: 10 * scaleX,
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
        top: 80 * scaleY,
        zIndex: 10,
    },
    showerOver: {
        position: 'absolute',
        top: 50 * scaleY,
        left: (140 * scaleX) - (100 * scaleX) / 2,
        width: 100 * scaleX,
        height: 100 * scaleY,
        resizeMode: 'contain',
        zIndex: 11,
    },
    soap: {
        position: 'absolute',
    },
    bodyPart: {
        position: 'absolute',
        width: 80 * scaleX,
        height: 80 * scaleY,
    },
    cleanedBodyPart: {
        opacity: 0.5,
        borderColor: 'limegreen',
        borderWidth: 2,
        borderRadius: 10,
    },
    draggableItem: {
        width: 80 * scaleX,
        height: 80 * scaleY,
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
    gameFinishedContainer: {
        flex: 1,
        marginTop: 400 * scaleY,
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 30,
    },
});

const stage1ClothingPositions: Record<ClothingKey, ViewStyle> = {
    shirt: {
        ...styles.clothesItem,
        width: characterWidth * 1.2,
        height: characterHeight * 0.96,
        left: (width - characterWidth * 1.2) / 2,
        top: characterHeight * 0.25,
        zIndex: 14,
    },
    pants: {
        ...styles.clothesItem,
        width: characterWidth,
        height: characterHeight * 0.52,
        left: (width - characterWidth) / 2,
        top: characterHeight * 0.32,
        zIndex: 13,
    },
    underwear: {
        ...styles.clothesItem,
        width: characterWidth,
        height: characterHeight * 0.15,
        left: (width - characterWidth) / 2,
        top: characterHeight * 0.73,
        zIndex: 12,
    },
    socks: {
        ...styles.clothesItem,
        width: characterWidth,
        height: characterHeight * 0.3,
        left: (width - characterWidth) / 2,
        top: characterHeight * 1.0,
        zIndex: 11,
    },
};

export default InteractivoDuchaM12;
