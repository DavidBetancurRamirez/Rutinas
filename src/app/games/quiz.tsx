import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import GameFinished from '@/components/GameFinished';
import Screen from '@/components/Screen';

import { questionBankMap, StepKey, Question } from '@/data/quizBankData';

import useAppStore from '@/stores';
import { Colors } from '@/constants/colors';

const shuffleArray = (array: Question[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const router = useRouter();
  const { age, gender, routine } = useAppStore();
  const key = `${age}_${gender}_${routine}` as StepKey;

  const [gameFinished, setGameFinished] = useState(false);

  const fullQuestions: Question[] = React.useMemo(
    () => questionBankMap[key] ?? [],
    [key],
  );

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray(fullQuestions).slice(0, 5);
    setQuestions(shuffled);
  }, [fullQuestions]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelect = (option: string) => {
    setSelectedAnswer(option);
    setShowResult(true);

    const isCorrect = option === currentQuestion.correctAnswer;
    if (isCorrect) setCorrectCount((prev) => prev + 1);

    setTimeout(() => {
      setSelectedAnswer(null);
      setShowResult(false);

      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
      } else {
        setGameFinished(true);
      }
    }, 1000);
  };

  const handleRetry = () => {
    const shuffled = shuffleArray(fullQuestions).slice(0, 5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setCorrectCount(0);
    setGameFinished(false);
  };

  if (questions.length === 0) {
    return (
      <Screen title="Quiz">
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 18, textAlign: 'center' }}>
            No hay preguntas disponibles 😕
          </Text>
        </View>
      </Screen>
    );
  }

  const getGameFinishedMessage = () => {
    if (correctCount === 0) {
      return '¡Ups! Esta vez no acertaste ninguna, pero no pasa nada. ¡Inténtalo de nuevo!';
    } else if (correctCount === questions.length) {
      return '¡Muy bien! ¡Respondiste todo correctamente! 🥳 ¡Eres increíble!';
    }
    return '¡Buen trabajo! Respondiste algunas bien. ¡Sigue practicando y lo harás aún mejor!';
  };

  return (
    <Screen title="Quiz">
      <GameFinished
        onBack={() => router.back()}
        onClose={() => setGameFinished(false)}
        onRetry={handleRetry}
        subtitle={getGameFinishedMessage()}
        title={`Respondiste correctamente ${correctCount}/${questions.length} preguntas`}
        visible={gameFinished}
        winner={correctCount > 0}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 12,
        }}
      >
        {/* Barra de progreso */}
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Pregunta {currentIndex + 1} de {totalQuestions}
        </Text>
        <View
          style={{
            width: '100%',
            maxWidth: 500,
            height: 10,
            backgroundColor: '#eee',
            borderRadius: 8,
            overflow: 'hidden',
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: `${gameFinished ? 100 : ((currentIndex + (showResult ? 1 : 0)) / totalQuestions) * 100}%`,
              height: '100%',
              backgroundColor: Colors.success,
            }}
          />
        </View>

        {/* Info general */}
        <View style={{ gap: 12, width: '100%', maxWidth: 500 }}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            Modo de juego: {routine}
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            Edad: {age} - Género: {gender}
          </Text>

          {/* Pregunta */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              {currentQuestion.question}
            </Text>

            <View style={{ gap: 10 }}>
              {currentQuestion.options.map((option) => {
                const isCorrect = option === currentQuestion.correctAnswer;
                const isSelected = option === selectedAnswer;

                let bg = '#e2e2e2';
                if (showResult && isSelected) {
                  bg = isCorrect ? Colors.success : Colors.error;
                }

                return (
                  <TouchableOpacity
                    key={option}
                    onPress={() => handleSelect(option)}
                    style={{
                      backgroundColor: bg,
                      padding: 12,
                      borderRadius: 12,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    disabled={showResult}
                  >
                    <Ionicons
                      name={
                        showResult && isCorrect
                          ? 'checkmark-circle-outline'
                          : showResult && isSelected
                            ? 'close-circle-outline'
                            : 'ellipse-outline'
                      }
                      size={20}
                      color="#333"
                      style={{ marginRight: 10 }}
                    />
                    <Text style={{ fontSize: 16 }}>{option}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Quiz;
