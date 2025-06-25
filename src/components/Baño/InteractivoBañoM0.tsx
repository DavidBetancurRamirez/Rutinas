import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, PanResponder, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screen from '@/components/Screen';
import GameFinished from '@/components/GameFinished';
import { useRouter } from 'expo-router';


// Get screen width for responsive instruction container
const { width } = Dimensions.get('window');

// Image imports
const IMAGES = {
    pee: require('@/assets/images/Pis Mujer.webp'),
    poop: require('@/assets/images/Popo.webp'),
    toilet: require('@/assets/images/Inodoro.webp'),
    toiletLidUp: require('@/assets/images/Levantar Tapa.webp'),
    pantsDown: require('@/assets/images/Bajar Pantalones (Mujer).webp'),
    underwearDown: require('@/assets/images/Bajar Ropa Interior (Mujer).webp'),
    womanSitting: require('@/assets/images/Mujer Sentada.webp'),
    womanPee: require('@/assets/images/Mujer Pis.webp'),
    womanPoop: require('@/assets/images/Mujer Popo.webp'),
    toiletPaper: require('@/assets/images/Papel.webp'),
    wipePee: require('@/assets/images/Limpiar Pis (Mujer).webp'),
    wipePoop: require('@/assets/images/Limpiar Popo (Mujer).webp'),
    dropPaper: require('@/assets/images/Tirar Papel.webp'),
    lowerLid: require('@/assets/images/Cerrar Tapa.webp'),
    flush: require('@/assets/images/Vaciar.webp'),
    pullUpPants: require('@/assets/images/Levantar Pantalones (Mujer).webp'),
    pullUpUnderwear: require('@/assets/images/Levantar Ropa Interior (Mujer).webp'),
    useSoap: require('@/assets/images/Usar Jabon.webp'),
    scrub: require('@/assets/images/Frotar Manos.webp'),
    washHands: require('@/assets/images/Lavar Manos.webp'),
    dryHands: require('@/assets/images/Secar Manos.webp'),
};

const InteractivoBañoM0: React.FC = () => {
    const [stage, setStage] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [choice, setChoice] = useState<'pee' | 'poop' | null>(null);
    const [isLidUp, setIsLidUp] = useState(false);
    const [isPantsDone, setIsPantsDone] = useState(false);
    const [isUnderwearDone, setIsUnderwearDone] = useState(false);
    const [isSittingDone, setIsSittingDone] = useState(false);
    const [isPaperPressed, setIsPaperPressed] = useState(false);
    const [isWipeDone, setIsWipeDone] = useState(false);
    const [isPaperDropped, setIsPaperDropped] = useState(false);
    const [isLidLowered, setIsLidLowered] = useState(false);
    const [isFlushed, setIsFlushed] = useState(false);
    const [isPantsPulledUp, setIsPantsPulledUp] = useState(false);
    const [isUnderwearPulledUp, setIsUnderwearPulledUp] = useState(false);
    const [isSoapUsed, setIsSoapUsed] = useState(false);
    const [isScrubbed, setIsScrubbed] = useState(false);
    const [isHandsWashed, setIsHandsWashed] = useState(false);
    const [isHandsDried, setIsHandsDried] = useState(false);
    const navigation = useNavigation();
    const [gameFinished, setGameFinished] = useState(false);
    const router = useRouter();
    
    const completedCount = (isPantsDone ? 1 : 0) + (isUnderwearDone ? 1 : 0);
    const actionCount = (isPaperDropped ? 1 : 0) + (isLidLowered ? 1 : 0) + (isFlushed ? 1 : 0);
    const pullUpCount = (isPantsPulledUp ? 1 : 0) + (isUnderwearPulledUp ? 1 : 0);
    const washCount = (isSoapUsed ? 1 : 0) + (isScrubbed ? 1 : 0) + (isHandsWashed ? 1 : 0) + (isHandsDried ? 1 : 0);

    const handleRetry = () => {
        setStage(1);
        setGameFinished(false);
        setShowFeedback(false);
        setFeedbackMessage('');
        setChoice(null);
        setIsLidUp(false);
        setIsPantsDone(false);
        setIsUnderwearDone(false);
        setIsSittingDone(false);
        setIsPaperPressed(false);
        setIsWipeDone(false);
        setIsPaperDropped(false);
        setIsLidLowered(false);
        setIsFlushed(false);
        setIsPantsPulledUp(false);
        setIsUnderwearPulledUp(false);
        setIsSoapUsed(false);
        setIsScrubbed(false);
        setIsHandsWashed(false);
        setIsHandsDried(false);
    };

    const pantsPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 3,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 3 && !isPantsDone) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 3 && gestureState.dy > 100 && !isPantsDone) {
                setIsPantsDone(true);
                if (isUnderwearDone) {
                    setFeedbackMessage('¡Correcto! 🎉');
                    setShowFeedback(true);
                    setTimeout(() => {
                        setShowFeedback(false);
                        setStage(4);
                        setIsPantsDone(false);
                        setIsUnderwearDone(false);
                    }, 2000);
                }
            }
        },
    });

    const underwearPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 3,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 3 && !isUnderwearDone) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 3 && gestureState.dy > 100 && !isUnderwearDone) {
                setIsUnderwearDone(true);
                if (isPantsDone) {
                    setFeedbackMessage('¡Correcto! 🎉');
                    setShowFeedback(true);
                    setTimeout(() => {
                        setShowFeedback(false);
                        setStage(4);
                        setIsPantsDone(false);
                        setIsUnderwearDone(false);
                    }, 2000);
                }
            }
        },
    });

    const toiletPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 2,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 2 && !isLidUp) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 2 && gestureState.dy < -100 && !isLidUp) {
                setIsLidUp(true);
                setFeedbackMessage('¡Correcto! 🎉');
                setShowFeedback(true);
                setTimeout(() => {
                    setShowFeedback(false);
                    setStage(3);
                    setIsLidUp(false);
                }, 2000);
            }
        },
    });

    const dropPaperPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 6,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 6 && !isPaperDropped) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 6 && gestureState.dy > 100 && !isPaperDropped) {
                setIsPaperDropped(true);
            }
        },
    });

    const lowerLidPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 6 && isPaperDropped,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 6 && isPaperDropped && !isLidLowered) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 6 && gestureState.dy > 100 && isPaperDropped && !isLidLowered) {
                setIsLidLowered(true);
            }
        },
    });

    const flushPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 6 && isLidLowered,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 6 && isLidLowered && !isFlushed) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 6 && gestureState.dy < -100 && isLidLowered && !isFlushed) {
                setIsFlushed(true);
                setFeedbackMessage('¡Correcto! 🎉');
                setShowFeedback(true);
                setTimeout(() => {
                    setShowFeedback(false);
                    setStage(7);
                    setIsPaperDropped(false);
                    setIsLidLowered(false);
                    setIsFlushed(false);
                }, 2000);
            }
        },
    });

    const pullUpPantsPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 7,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 7 && !isPantsPulledUp) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 7 && gestureState.dy < -100 && !isPantsPulledUp) {
                setIsPantsPulledUp(true);
                if (isUnderwearPulledUp) {
                    setFeedbackMessage('¡Correcto! 🎉');
                    setShowFeedback(true);
                    setTimeout(() => {
                        setShowFeedback(false);
                        setStage(8);
                        setIsPantsPulledUp(false);
                        setIsUnderwearPulledUp(false);
                    }, 2000);
                }
            }
        },
    });

    const pullUpUnderwearPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 7,
        onPanResponderMove: () => { },
        onPanResponderGrant: () => {
            if (stage === 7 && !isUnderwearPulledUp) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 7 && gestureState.dy < -100 && !isUnderwearPulledUp) {
                setIsUnderwearPulledUp(true);
                if (isPantsPulledUp) {
                    setFeedbackMessage('¡Correcto! 🎉');
                    setShowFeedback(true);
                    setTimeout(() => {
                        setShowFeedback(false);
                        setStage(8);
                        setIsPantsPulledUp(false);
                        setIsUnderwearPulledUp(false);
                    }, 2000);
                }
            }
        },
    });

    const handlePress = (selectedChoice: 'pee' | 'poop') => {
        if (stage === 1) {
            setChoice(selectedChoice);
            setFeedbackMessage('¡Buena elección!');
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(2);
            }, 2000);
        }
    };

    const handleSittingPress = () => {
        if (stage === 4 && !isSittingDone) {
            setIsSittingDone(true);
            setFeedbackMessage('¡Correcto! 🎉');
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(5);
                setIsSittingDone(false);
            }, 2000);
        }
    };

    const handlePaperPress = () => {
        if (stage === 5 && !isPaperPressed) {
            setIsPaperPressed(true);
        }
    };

    const handleWipePress = () => {
        if (stage === 5 && isPaperPressed && !isWipeDone) {
            setIsWipeDone(true);
            setFeedbackMessage('¡Correcto! 🎉');
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(6);
                setIsPaperPressed(false);
                setIsWipeDone(false);
            }, 2000);
        }
    };

    const handleSoapPress = () => {
        if (stage === 8 && !isSoapUsed) {
            setIsSoapUsed(true);
        }
    };

    const handleScrubPress = () => {
        if (stage === 8 && isSoapUsed && !isScrubbed) {
            setIsScrubbed(true);
        }
    };

    const handleWashPress = () => {
        if (stage === 8 && isScrubbed && !isHandsWashed) {
            setIsHandsWashed(true);
        }
    };

    const handleDryPress = () => {
        if (stage === 8 && isHandsWashed && !isHandsDried) {
            setIsHandsDried(true);
            setFeedbackMessage('¡Correcto! 🎉');
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setGameFinished(true);
                setIsSoapUsed(false);
                setIsScrubbed(false);
                setIsHandsWashed(false);
                setIsHandsDried(false);
            }, 2000);
        }
    };

    return (
        <Screen title="Interactivo - Ir al Baño">
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
                                ? '¡Toca para elegir si haces pis o popó! 🚽✨'
                                : stage === 2
                                    ? '¡Desliza hacia arriba para subir la tapa! 🚽✨'
                                    : stage === 3
                                        ? '¡Desliza hacia abajo para bajar los pantalones y la ropa interior! 👖✨'
                                        : stage === 4
                                            ? `¡Toca para sentarte y hacer ${choice === 'pee' ? 'pis' : 'popó'}! 🚽✨`
                                            : stage === 5
                                                ? `¡Toca el papel y luego limpia el ${choice === 'pee' ? 'pis' : 'popó'}! 🧻✨`
                                                : stage === 6
                                                    ? '¡Desliza hacia abajo para tirar el papel y bajar la tapa. Luego desliza hacia arriba para vaciar el inodoro! 🚽💧'
                                                    : stage === 7
                                                        ? '¡Desliza hacia arriba para subir los pantalones y la ropa interior! 👖✨'
                                                        : '¡Toca en orden para lavar tus manos: jabón, frotar, lavar y secar! 🧼✨'}
                        </Text>
                    )}
                </View>

                <View style={[styles.gameArea, stage === 9 && styles.gameAreaGameFinished]}>
                    {stage === 1 ? (
                        <View style={styles.choiceContainer}>
                            {/* Pee Option */}
                            <View style={styles.choiceWrapper}>
                                <Text style={styles.titles}>Pis</Text>
                                <TouchableOpacity onPress={() => handlePress('pee')}>
                                    <Image source={IMAGES.pee} style={styles.choiceImage} />
                                </TouchableOpacity>
                            </View>
                            {/* Poop Option */}
                            <View style={styles.choiceWrapper}>
                                <Text style={styles.titles}>Popó</Text>
                                <TouchableOpacity onPress={() => handlePress('poop')}>
                                    <Image source={IMAGES.poop} style={styles.choiceImage} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : stage === 2 ? (
                        <Animated.View
                            {...toiletPanResponder.panHandlers}
                            style={styles.toiletContainer}
                        >
                            <Image
                                source={isLidUp ? IMAGES.toiletLidUp : IMAGES.toilet}
                                style={styles.toiletImage}
                            />
                        </Animated.View>
                    ) : stage === 3 ? (
                        <View style={styles.choiceContainer}>
                            {/* Counter */}
                            <Text style={styles.counterText}>
                                {completedCount}/2
                            </Text>
                            {/* Pants Option */}
                            <Animated.View
                                {...pantsPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.pantsDown}
                                    style={[styles.clothesImage, isPantsDone && styles.completedImage]}
                                />
                            </Animated.View>
                            {/* Underwear Option */}
                            <Animated.View
                                {...underwearPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.underwearDown}
                                    style={[styles.clothesImage, isUnderwearDone && styles.completedImage]}
                                />
                            </Animated.View>
                        </View>
                    ) : stage === 4 ? (
                        <View style={styles.toiletContainer}>
                            <TouchableOpacity onPress={handleSittingPress}>
                                <Image
                                    source={
                                        isSittingDone
                                            ? choice === 'pee'
                                                ? IMAGES.womanPee
                                                : IMAGES.womanPoop
                                            : IMAGES.womanSitting
                                    }
                                    style={styles.toiletUsingImage}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : stage === 5 ? (
                        <View style={styles.wipeContainer}>
                            {/* Toilet Paper Option */}
                            <TouchableOpacity onPress={handlePaperPress}>
                                <Image
                                    source={IMAGES.toiletPaper}
                                    style={[styles.paperImage, isPaperPressed && styles.completedImage]}
                                />
                            </TouchableOpacity>
                            {/* Wipe Option */}
                            <TouchableOpacity
                                onPress={handleWipePress}
                                disabled={!isPaperPressed}
                            >
                                <Image
                                    source={choice === 'pee' ? IMAGES.wipePee : IMAGES.wipePoop}
                                    style={[
                                        styles.wipeImage,
                                        !isPaperPressed && styles.disabledImage,
                                        isWipeDone && styles.completedImage,
                                    ]}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : stage === 6 ? (
                        <View style={styles.actionContainer}>
                            {/* Counter */}
                            <Text style={styles.counterText2}>
                                {actionCount}/3
                            </Text>
                            {/* Drop Paper Option */}
                            <Animated.View
                                {...dropPaperPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.dropPaper}
                                    style={[
                                        styles.dropPaperImage,
                                        isPaperDropped && styles.completedImage,
                                    ]}
                                />
                            </Animated.View>
                            {/* Lower Lid Option */}
                            <Animated.View
                                {...lowerLidPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.lowerLid}
                                    style={[
                                        styles.lowerLidImage,
                                        !isPaperDropped && styles.disabledActionImage,
                                        isLidLowered && styles.completedImage,
                                    ]}
                                />
                            </Animated.View>
                            {/* Flush Option */}
                            <Animated.View
                                {...flushPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.flush}
                                    style={[
                                        styles.flushImage,
                                        !isLidLowered && styles.disabledActionImage,
                                        isFlushed && styles.completedImage,
                                    ]}
                                />
                            </Animated.View>
                        </View>
                    ) : stage === 7 ? (
                        <View style={styles.choiceContainer}>
                            {/* Counter */}
                            <Text style={styles.counterText}>
                                {pullUpCount}/2
                            </Text>
                            {/* Pull Up Underwear Option */}
                            <Animated.View
                                {...pullUpUnderwearPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.pullUpUnderwear}
                                    style={[styles.pullUpImage, isUnderwearPulledUp && styles.completedImage]}
                                />
                            </Animated.View>
                            {/* Pull Up Pants Option */}
                            <Animated.View
                                {...pullUpPantsPanResponder.panHandlers}
                                style={styles.imageWrapper}
                            >
                                <Image
                                    source={IMAGES.pullUpPants}
                                    style={[styles.pullUpImage, isPantsPulledUp && styles.completedImage]}
                                />
                            </Animated.View>
                        </View>
                    ) : stage === 8 ? (
                        <View style={styles.washContainer}>
                            {/* Counter */}
                            <Text style={styles.counterText3}>
                                {washCount}/4
                            </Text>
                            {/* Top Row */}
                            <View style={styles.washRow}>
                                {/* Use Soap */}
                                <TouchableOpacity onPress={handleSoapPress}>
                                    <Image
                                        source={IMAGES.useSoap}
                                        style={[
                                            styles.washImage,
                                            isSoapUsed && styles.completedImage,
                                        ]}
                                    />
                                </TouchableOpacity>
                                {/* Scrub */}
                                <TouchableOpacity
                                    onPress={handleScrubPress}
                                    disabled={!isSoapUsed}
                                >
                                    <Image
                                        source={IMAGES.scrub}
                                        style={[
                                            styles.washImage,
                                            !isSoapUsed && styles.disabledWashImage,
                                            isScrubbed && styles.completedImage,
                                        ]}
                                    />
                                </TouchableOpacity>
                            </View>
                            {/* Bottom Row */}
                            <View style={styles.washRow}>
                                {/* Wash Hands */}
                                <TouchableOpacity
                                    onPress={handleWashPress}
                                    disabled={!isScrubbed}
                                >
                                    <Image
                                        source={IMAGES.washHands}
                                        style={[
                                            styles.washImage,
                                            !isScrubbed && styles.disabledWashImage,
                                            isHandsWashed && styles.completedImage,
                                        ]}
                                    />
                                </TouchableOpacity>
                                {/* Dry Hands */}
                                <TouchableOpacity
                                    onPress={handleDryPress}
                                    disabled={!isHandsWashed}
                                >
                                    <Image
                                        source={IMAGES.dryHands}
                                        style={[
                                            styles.washImage,
                                            !isHandsWashed && styles.disabledWashImage,
                                            isHandsDried && styles.completedImage,
                                        ]}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                    {/* Feedback */}
                    {showFeedback && stage !== 9 && (
                        <Text style={styles.feedback}>{feedbackMessage}</Text>
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
        backgroundColor: '#F0F8FF',
    },
    backButtonText: {
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500',
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        lineHeight: width * 0.06,
    },
    instructionContainer: {
        position: 'absolute',
        top: 20,
        width: width * 0.9,
        backgroundColor: '#FFD700',
        padding: width * 0.03,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    instruction: {
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500',
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        lineHeight: width * 0.06,
    },
    gameArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        marginTop: 80,
    },
    gameAreaGameFinished: {
        marginTop: 200,
    },
    gameFinishedContainer: {
        flex: 1,
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 30,
    },
    choiceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 100,
        zIndex: 5,
    },
    choiceWrapper: {
        alignItems: 'center',
    },
    wipeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 150,
        width: width * 0.8,
        zIndex: 5,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 150,
        width: width * 0.9,
        zIndex: 5,
    },
    washContainer: {
        top: 150,
        width: 220,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    washRow: {
        flexDirection: 'row',
        top: 100,
        justifyContent: 'space-between',
        width: '120%',
        marginVertical: 5,
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    choiceImage: {
        width: 180,
        height: 180,
        top: 50,
        resizeMode: 'contain',
    },
    clothesImage: {
        width: 180,
        height: 180,
        top: 100,
        resizeMode: 'contain',
    },
    paperImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    wipeImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    dropPaperImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    lowerLidImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    flushImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    pullUpImage: {
        width: 180,
        height: 180,
        top: 100,
        resizeMode: 'contain',
    },
    washImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    disabledImage: {
        opacity: 0.3,
    },
    disabledActionImage: {
        opacity: 0.3,
    },
    disabledWashImage: {
        opacity: 0.3,
    },
    completedImage: {
        opacity: 0.5,
    },
    toiletContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 200,
        zIndex: 5,
    },
    toiletImage: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    toiletUsingImage: {
        width: 250,
        height: 250,
        top: -100,
        resizeMode: 'contain',
    },
    counterText: {
        position: 'absolute',
        top: -50,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#1E90FF',
        zIndex: 15,
    },
    counterText2: {
        position: 'absolute',
        top: 100,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#1E90FF',
        zIndex: 15,
    },
    counterText3: {
        position: 'absolute',
        top: 20,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#1E90FF',
        zIndex: 15,
    },
    feedback: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF69B4',
        position: 'absolute',
        top: 500,
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        zIndex: 15,
    },
    titles: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF69B4',
        position: 'absolute',
        top: 10,
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        zIndex: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF69B4',
        position: 'absolute',
        top: 10,
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        zIndex: 15,
    },
    subtitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF69B4',
        position: 'absolute',
        top: 10,
        textShadowColor: '#FFF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        zIndex: 15,
    },

});

export default InteractivoBañoM0;