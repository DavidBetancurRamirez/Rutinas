import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Modal, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Screen from '@/components/Screen';
import useAppStore from '@/stores';
import { questionBankMap, StepKey, Question } from '@/data/quizBankData';

const shuffleArray = (array: Question[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const { age, gender, routine } = useAppStore();
  const key = `${age}_${gender}_${routine}` as StepKey;

  const fullQuestions: Question[] = questionBankMap[key] ?? [];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

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
        setQuizFinished(true);
      }
    }, 1000);
  };

  const handleCloseModal = () => {
    const shuffled = shuffleArray(fullQuestions).slice(0, 5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setCorrectCount(0);
    setQuizFinished(false);
  };

  if (questions.length === 0) {
    return (
      <Screen title="Quiz">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>No hay preguntas disponibles 😕</Text>
        </View>
      </Screen>
    );
  }

  const isWin = correctCount >= 3;
  const isPerfect = correctCount === questions.length;

  return (
    <Screen title="Quiz">
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 16, paddingTop: 12 }}>
        {/* Barra de progreso */}
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Pregunta {currentIndex + 1} de {totalQuestions}
        </Text>
        <View style={{ width: '100%', maxWidth: 500, height: 10, backgroundColor: '#eee', borderRadius: 8, overflow: 'hidden', marginBottom: 24 }}>
          <View
            style={{
              width: `${quizFinished ? 100 : ((currentIndex + (showResult ? 1 : 0)) / totalQuestions) * 100}%`,
              height: '100%',
              backgroundColor: '#4CAF50'
            }}
          />
        </View>

        {/* Info general */}
        <View style={{ gap: 12, width: '100%', maxWidth: 500 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Modo de juego: {routine}</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>Edad: {age} - Género: {gender}</Text>

          {/* Pregunta */}
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', marginBottom: 12 }}>
              {currentQuestion.question}
            </Text>

            <View style={{ gap: 10 }}>
              {currentQuestion.options.map((option) => {
                const isCorrect = option === currentQuestion.correctAnswer;
                const isSelected = option === selectedAnswer;

                let bg = '#e2e2e2';
                if (showResult && isSelected) {
                  bg = isCorrect ? '#a1e3a1' : '#f8a1a1';
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

      {/* MODAL FINAL */}
      <Modal visible={quizFinished} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: isWin ? '#d2f4d2' : '#f9d3d3',
              padding: 28,
              borderRadius: 20,
              alignItems: 'center',
              width: '80%',
              maxWidth: 400,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
              ¡Has terminado!
            </Text>
            <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 6 }}>
              Respondiste correctamente {correctCount}/{questions.length} preguntas
            </Text>

            {isPerfect && (
              <Text style={{ fontSize: 18, marginTop: 4 }}>¡Excelente! 😄</Text>
            )}

            <TouchableOpacity
              onPress={handleCloseModal}
              style={{
                marginTop: 20,
                backgroundColor: '#333',
                paddingVertical: 10,
                paddingHorizontal: 24,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>Jugar otra vez</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Screen>
  );
};

export default Quiz;
