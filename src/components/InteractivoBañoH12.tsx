import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, PanResponder, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screen from '@/components/Screen';

// Get screen width for responsive instruction container
const { width } = Dimensions.get('window');

// Image imports
const IMAGES = {
    pee: require('@/assets/images/Pis Hombre.png'),
    poop: require('@/assets/images/Popo.png'),
    toilet: require('@/assets/images/Inodoro.png'),
    toiletLidUp: require('@/assets/images/Levantar Tapa.png'),
    pantsDown: require('@/assets/images/Bajar Pantalones (Hombre).png'),
    underwearDown: require('@/assets/images/Bajar Ropa Interior (Hombre).png'),
    manSitting: require('@/assets/images/Hombre Sentado.png'),
    menPeeBefore: require('@/assets/images/Hombre Antes Pis.png'),
    menPeeAfter: require('@/assets/images/Hombre Despues Pis.png'),
    manPoop: require('@/assets/images/Hombre Popo.png'),
    toiletPaper: require('@/assets/images/Papel.png'),
    wipePee: require('@/assets/images/Limpiar Pene.png'),
    wipePoop: require('@/assets/images/Limpiar Popo (Hombre).png'),
    dropPaper: require('@/assets/images/Tirar Papel.png'),
    lowerLid: require('@/assets/images/Cerrar Tapa.png'),
    flush: require('@/assets/images/Vaciar.png'),
    pullUpPants: require('@/assets/images/Subir Pantalones (Hombre).png'),
    pullUpUnderwear: require('@/assets/images/Subir Ropa Interior (Hombre).png'),
    useSoap: require('@/assets/images/Usar Jabon.png'),
    scrub: require('@/assets/images/Frotar Manos.png'),
    washHands: require('@/assets/images/Lavar Manos.png'),
    dryHands: require('@/assets/images/Secar Manos.png'),
};

const InteractivoBañoH12 = () => {
    const [stage, setStage] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState(''); // New state for feedback message
    const [choice, setChoice] = useState<'pee' | 'poop' | null>(null); // Typed choice state
    const [isLidUp, setIsLidUp] = useState(false); // Track toilet lid state
    const [isPantsDone, setIsPantsDone] = useState(false); // Track pants lowering
    const [isUnderwearDone, setIsUnderwearDone] = useState(false); // Track underwear lowering
    const [isSittingDone, setIsSittingDone] = useState(false); // Track sitting completion
    const [isPaperPressed, setIsPaperPressed] = useState(false); // Track paper press
    const [isWipeDone, setIsWipeDone] = useState(false); // Track wipe completion
    const [isPaperDropped, setIsPaperDropped] = useState(false); // Track paper drop
    const [isLidLowered, setIsLidLowered] = useState(false); // Track lid lowering
    const [isFlushed, setIsFlushed] = useState(false); // Track flush
    const [isPantsPulledUp, setIsPantsPulledUp] = useState(false); // Track pants pull-up
    const [isUnderwearPulledUp, setIsUnderwearPulledUp] = useState(false); // Track underwear pull-up
    const [isSoapUsed, setIsSoapUsed] = useState(false); // Track soap use
    const [isScrubbed, setIsScrubbed] = useState(false); // Track scrubbing
    const [isHandsWashed, setIsHandsWashed] = useState(false); // Track hand washing
    const [isHandsDried, setIsHandsDried] = useState(false); // Track hand drying

    // Navigation hook
    const navigation = useNavigation();

    // Counter for stage 3 (number of completed drags)
    const completedCount = (isPantsDone ? 1 : 0) + (isUnderwearDone ? 1 : 0);

    // Counter for stage 6 (number of completed actions)
    const actionCount = (isPaperDropped ? 1 : 0) + (isLidLowered ? 1 : 0) + (isFlushed ? 1 : 0);

    // Counter for stage 7 (number of completed pull-ups)
    const pullUpCount = (isPantsPulledUp ? 1 : 0) + (isUnderwearPulledUp ? 1 : 0);

    // Counter for stage 8 (number of completed wash actions)
    const washCount = (isSoapUsed ? 1 : 0) + (isScrubbed ? 1 : 0) + (isHandsWashed ? 1 : 0) + (isHandsDried ? 1 : 0);

    // PanResponder for pants in stage 3
    const pantsPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 3,
        onPanResponderMove: () => {},
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

    // PanResponder for underwear in stage 3
    const underwearPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 3,
        onPanResponderMove: () => {},
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

    // PanResponder for toilet lid in stage 2
    const toiletPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 2,
        onPanResponderMove: () => {},
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

    // PanResponder for dropping paper in stage 6
    const dropPaperPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 6,
        onPanResponderMove: () => {},
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

    // PanResponder for lowering lid in stage 6
    const lowerLidPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 6 && isPaperDropped,
        onPanResponderMove: () => {},
        onPanResponderGrant: () => {
            if (stage === 6 && isPaperDropped && !isLidLowered) {
                // No offset needed
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (stage === 6 && gestureState.dy > 0 && isPaperDropped && !isLidLowered) {
                setIsLidLowered(true);
            }
        },
    });

    // PanResponder for flushing in stage 6
    const flushPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 6 && isLidLowered,
        onPanResponderMove: () => {},
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

    // PanResponder for pulling up pants in stage 7
    const pullUpPantsPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 7,
        onPanResponderMove: () => {},
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

    // PanResponder for pulling up underwear in stage 7
    const pullUpUnderwearPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => stage === 7,
        onPanResponderMove: () => {},
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

    // Handle selection for stage 1 (pee or poop)
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

    // Handle sitting press for stage 4
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

    // Handle paper press for stage 5
    const handlePaperPress = () => {
        if (stage === 5 && !isPaperPressed) {
            setIsPaperPressed(true);
        }
    };

    // Handle wipe press for stage 5
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

    // Handle soap press for stage 8
    const handleSoapPress = () => {
        if (stage === 8 && !isSoapUsed) {
            setIsSoapUsed(true);
        }
    };

    // Handle scrub press for stage 8
    const handleScrubPress = () => {
        if (stage === 8 && isSoapUsed && !isScrubbed) {
            setIsScrubbed(true);
        }
    };

    // Handle wash hands press for stage 8
    const handleWashPress = () => {
        if (stage === 8 && isScrubbed && !isHandsWashed) {
            setIsHandsWashed(true);
        }
    };

    // Handle dry hands press for stage 8
    const handleDryPress = () => {
        if (stage === 8 && isHandsWashed && !isHandsDried) {
            setIsHandsDried(true);
            setFeedbackMessage('¡Correcto! 🎉');
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                setStage(9);
                setIsSoapUsed(false);
                setIsScrubbed(false);
                setIsHandsWashed(false);
                setIsHandsDried(false);
            }, 2000);
        }
    };

    // Navigate back to selection screen after 3 seconds in stage 9
    useEffect(() => {
        if (stage === 9) {
            console.log("Reached stage 9, starting navigation timeout"); // Debug log
            const timeout = setTimeout(() => {
                console.log("Navigating back to selection screen"); // Debug log
                navigation.goBack();
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [stage, navigation]);

    return (
        <Screen title="Interactivo - Ir al Baño">
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
                                            ? `¡Toca para hacer ${choice === 'pee' ? 'pis' : 'popó'}! 🚽✨`
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

                <View style={styles.gameArea}>
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
                                                ? IMAGES.menPeeAfter
                                                : IMAGES.manPoop
                                            : choice === 'pee'
                                                ? IMAGES.menPeeBefore
                                                : IMAGES.manSitting
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
                    ) : stage === 9 ? (
                        <View style={styles.finalTextContainer}>
                            <Text style={styles.finalText}>
                                ¡Bien hecho, ya sabes como entrar al baño! 🎉
                            </Text>
                        </View>
                    ) : null}

                    {/* Feedback */}
                    {showFeedback && (
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
        backgroundColor: '#F0F8FF', // Light blue background
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
        marginTop: 80,
    },
    choiceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Space images horizontally
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
        marginVertical: 5, // Tight vertical gap
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
    finalTextContainer: {
        width: width * 0.9,
        minHeight: 100,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -50 }],
        zIndex: 10,
    },
    finalText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4500',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 10,
    },
});

export default InteractivoBañoH12;