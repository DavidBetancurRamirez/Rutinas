import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screen from '@/components/Screen';
import GameFinished from '../GameFinished';
import { useRouter } from 'expo-router';

// Get screen width for responsive instruction container
const { width } = Dimensions.get('window');

// Image imports
const IMAGES = {
    toothpasteWithout: require('@/assets/images/Crema Dental (Sin).webp'),
    toothpasteWith: require('@/assets/images/Crema Dental (Con).webp'),
    faucetClosed: require('@/assets/images/Canilla (Cerrada).webp'),
    faucetOpen: require('@/assets/images/Canilla (Abierta).webp'),
    toothbrush: require('@/assets/images/cepillo.webp'),
    mouth: require('@/assets/images/Dientes.webp'),
    wash: require('@/assets/images/Agua.webp'),
    spit: require('@/assets/images/Escupir (Sin).webp'),
    spit2: require('@/assets/images/Escupir (Con).webp'),
    tongue: require('@/assets/images/lengua.webp'),
    mouthwash: require('@/assets/images/Enjuague.webp'),
};

const InteractivoDientesH12 = () => {
    const [stage, setStage] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);
    const [useToothpasteWith, setUseToothpasteWith] = useState(false);
    const [useFaucetOpen, setUseFaucetOpen] = useState(false);
    const [useMouthwash, setUseMouthwash] = useState(false);
    const [timer, setTimer] = useState(5);
    const [isBrushing, setIsBrushing] = useState(false);
    const [isHolding, setIsHolding] = useState(false);
    const [useSpitWith, setUseSpitWith] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const router = useRouter();

    const handleRetry = () => {
        setStage(1);
        setGameFinished(false);
        setShowFeedback(false);
        setUseToothpasteWith(false);
        setUseFaucetOpen(false);
        setTimer(5);
        setIsBrushing(false);
        setIsHolding(false);
        setUseSpitWith(false);
        setUseMouthwash(false);
    };

    // Animated value for toothbrush movement (stages 3, 4, and 5)
    const pan = new Animated.ValueXY({ x: 0, y: 0 });

    // Navigation hook
    const navigation = useNavigation();

    // PanResponder for horizontal (stage 3) or vertical (stages 4 and 5) dragging
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 3 || stage === 4 || stage === 5,
        onPanResponderMove: Animated.event(
            [
                null,
                stage === 3 ? { dx: pan.x } : { dy: pan.y },
            ],
            { useNativeDriver: false }
        ),
        onPanResponderGrant: () => {
            if ((stage === 3 || stage === 4 || stage === 5) && !isBrushing) {
                setIsBrushing(true);
                setTimer(5);
            }
        },
        onPanResponderRelease: () => {
            // Reset timer and brushing state when player stops dragging
            setIsBrushing(false);
            setTimer(5);
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
            }).start();
        },
    });

    // Handle stage progression for stages 1, 2, 6, 7, and 8
    const handlePress = () => {
        if (stage === 1) {
            setUseToothpasteWith(true);
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(2);
            }, 2000);
        } else if (stage === 2) {
            setUseFaucetOpen(true);
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(3);
            }, 2000);
        } else if (stage === 7) { 
            setUseMouthwash(true);
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(8);
            }, 2000);
        } else if (stage === 8) {
            setUseSpitWith(true);
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setGameFinished(true);
            }, 2000);
        }
    };

    // Handle hold for stage 6 (gargling)
    const handleHoldStart = () => {
        if (stage === 6) {
            setIsHolding(true);
            setTimer(3);
        }
    };

    const handleHoldEnd = () => {
        if (stage === 6) {
            setIsHolding(false);
            setTimer(3);
        }
    };

    // Timer logic for stages 3, 4, 5, and 6
    useEffect(() => {
        let interval: number;
        if ((stage === 3 || stage === 4 || stage === 5) && isBrushing && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setStage(stage === 3 ? 4 : stage === 4 ? 5 : 6); // 3->4, 4->5, 5->6
                        setIsBrushing(false);
                        setTimer(5);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (stage === 6 && isHolding && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setIsHolding(false);
                        setTimer(3);
                        setTimeout(() => {
                            console.log("Advancing to stage 7"); // Debug log
                            setStage(7); // Advance to mouthwash
                        }, 1000);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [stage, isBrushing, isHolding, timer]);

    return (
        <Screen title="Interactivo - Cepillado de Dientes">
            <GameFinished
                onBack={() => router.back()}
                onClose={() => setGameFinished(false)}
                onRetry={handleRetry}
                subtitle="Has completado la rutina correctamente"
                visible={gameFinished}
            />
            <View style={styles.container}>
                <View style={styles.instructionContainer}>
                    {stage !== 9 && (
                        <Text style={styles.instruction}>
                            {stage === 1
                                ? '¡Toca la crema dental para ponerla en el cepillo! 🦷✨'
                                : stage === 2
                                    ? 'Toca la canilla para que salga agua! 🚰💦'
                                    : stage === 3
                                        ? '¡Cepilla de lado a lado bien con ganas! 😁🪥'
                                        : stage === 4
                                            ? '¡Cepilla de arriba a abajo con ganas! 🪥🔝'
                                            : stage === 5
                                                ? '¡Cepilla tu lengua de arriba a abajo! 😛🪥'
                                                : stage === 6
                                                    ? 'Lava tu boca con el agua y haz gárgaras! 🥤😜'
                                                    : stage === 7
                                                        ? '¡Toca el enjuague bucal para usarlo! 🧴✨'
                                                        : '¡Toca para escupir y terminar! 😛💧'}
                        </Text>
                    )}
                </View>

                <View style={styles.gameArea}>
                    {stage < 3 ? (
                        <>
                            {/* Touchable Image (Toothpaste or Faucet) */}
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={
                                            stage === 1
                                                ? useToothpasteWith
                                                    ? IMAGES.toothpasteWith
                                                    : IMAGES.toothpasteWithout
                                                : useFaucetOpen
                                                    ? IMAGES.faucetOpen
                                                    : IMAGES.faucetClosed
                                        }
                                        style={stage === 1 ? styles.toothpasteImage : styles.faucetImage}
                                    />
                                </View>
                            </TouchableOpacity>

                            {/* Toothbrush Image */}
                            <View style={styles.targetContainer}>
                                <Image source={IMAGES.toothbrush} style={styles.targetImage} />
                            </View>
                        </>
                    ) : stage === 3 || stage === 4 || stage === 5 ? (
                        <>
                            {/* Mouth or Tongue Image */}
                            <View style={[
                                styles.targetContainer,
                                {
                                    top: width * 0.55, // Match toothbrush vertical position
                                    left: (width - 300) / 2 - 20, // Match toothbrush horizontal position, adjusted for mouth/tongue width
                                }
                            ]}>
                                <Image
                                    source={stage === 5 ? IMAGES.tongue : IMAGES.mouth}
                                    style={stage === 5 ? styles.tongueImage : styles.mouthImage}
                                />
                            </View>

                            {/* Draggable Toothbrush */}
                            <Animated.View
                                {...panResponder.panHandlers}
                                style={[
                                    styles.imageContainer,
                                    {
                                        transform: [
                                            { translateX: stage === 3 ? pan.x : 0 },
                                            { translateY: stage === 4 || stage === 5 ? pan.y : 0 },
                                        ],
                                        top: width * 0.55, // Adjusted for centering vertically
                                        left: (width - 200) / 2 - 20, // Center horizontally, shift 20px left
                                    },
                                ]}
                            >
                                <Image source={IMAGES.toothbrush} style={styles.targetImage} />
                            </Animated.View>

                            {/* Timer Display */}
                            {isBrushing && (
                                <Text style={styles.timer}>
                                    Tiempo restante: {timer}s
                                </Text>
                            )}
                        </>
                    ) : stage === 6 ? (
                        <>
                            {/* Water Image */}
                            <TouchableOpacity
                                onPressIn={handleHoldStart}
                                onPressOut={handleHoldEnd}
                                style={styles.waterContainer}
                            >
                                <Image source={IMAGES.wash} style={styles.waterImage} />
                            </TouchableOpacity>
                            {/* Timer Display */}
                            {isHolding && (
                                <Text style={styles.timer}>
                                    Tiempo restante: {timer}s
                                </Text>
                            )}
                        </>
                    ) : stage === 7 ? (
                        <>
                            {/* Mouthwash Image */}
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.mouthwashContainer}>
                                    <Image
                                        source={useMouthwash ? IMAGES.mouthwash : IMAGES.mouthwash}
                                        style={styles.mouthwashImage}
                                    />
                                </View>
                            </TouchableOpacity>
                        </>
                    ) : stage === 8 ? (
                        <>
                            {/* Spit Image */}
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.spitContainer}>
                                    <Image
                                        source={useSpitWith ? IMAGES.spit2 : IMAGES.spit}
                                        style={styles.spitImage}
                                    />
                                </View>
                            </TouchableOpacity>
                        </>
                    ) : null}
                    {/* Feedback */}
                    {showFeedback && (
                        <Text style={styles.feedback}>¡Correcto! 🎉</Text>
                    )}
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
        backgroundColor: '#F0F8FF', // Light blue background
    },
    gameAreaGameFinished: {
        marginTop: 200,
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
    instructionContainer: {
        position: 'absolute',
        top: 20, // Fixed position near top
        width: width * 0.9, // 90% of screen width
        backgroundColor: '#FFD700', // Bright yellow
        padding: width * 0.03, // Responsive padding
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20, // Above all elements
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    instruction: {
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05, // Responsive font size, capped at 20
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500', // Vibrant orange
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        lineHeight: width * 0.06, // Improve readability
    },
    gameArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        marginTop: 80, // Space for instruction container
    },
    imageContainer: {
        position: 'absolute',
        top: 300,
        zIndex: 10,
    },
    toothpasteImage: {
        width: 200,
        height: 200,
        left: -100,
        top: -200,
        resizeMode: 'contain',
    },
    faucetImage: {
        width: 400,
        height: 400,
        left: -240,
        top: -250,
        resizeMode: 'contain',
    },
    targetContainer: {
        position: 'absolute',
        top: 200,
        zIndex: 5,
    },
    targetImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    mouthImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
    tongueImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
    waterContainer: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
        zIndex: 5,
    },
    waterImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    spitContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    spitImage: {
        width: 300,
        height: 300,
        top: 250,
        resizeMode: 'contain',
    },
    mouthwashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    mouthwashImage: {
        width: 200,
        height: 200,
        top: 250,
        resizeMode: 'contain',
    },
    progressBarContainer: {
        width: 200,
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        marginTop: 10,
        overflow: 'hidden',
    },
    feedback: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF69B4', // Bright pink
        position: 'absolute',
        top: 100,
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        zIndex: 15,
    },
    timer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E90FF', // Bright blue
        position: 'absolute',
        top: 50,
        zIndex: 15,
    },
    finalTextContainer: {
        width: width * 0.9, // Match instructionContainer width
        minHeight: 100, // Ensure enough height for text
        padding: 20, // Add padding for spacing
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', // Position within gameArea
        top: '50%', // Center vertically
        transform: [{ translateY: -50 }], // Adjust for true vertical centering
        zIndex: 10, // Above other elements
    },
    finalText: {
        fontSize: 24, // Fixed size for visibility
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500', // Vibrant orange
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        padding: 10,
        borderRadius: 10,
    },
});

export default InteractivoDientesH12;
