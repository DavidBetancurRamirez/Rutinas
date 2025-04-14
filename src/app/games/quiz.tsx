import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Screen from '@/components/Screen';
import useAppStore from '@/stores';
import { questionBankMap, StepKey, Question } from '@/data/quizBankData';
import { AGES, GENDERS, ROUTINES } from '@/constants';

const Quiz = () => {
  const { age, gender, routine } = useAppStore();

  const key = `${age}_${gender}_${routine}` as StepKey;

  const questions: Question[] = questionBankMap[key] ?? [];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option: string) => {
    setSelectedAnswer(option);
    setShowResult(true);

    setTimeout(() => {
      setSelectedAnswer(null);
      setShowResult(false);
      setCurrentIndex((prev) => (prev + 1 < questions.length ? prev + 1 : 0)); // Loop
    }, 1000);
  };

  if (!currentQuestion) {
    return (
      <Screen title="Quiz">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>No hay preguntas disponibles 😕</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen title="Quiz">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
        <View style={{ gap: 12, width: '100%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Modo de juego: {routine}</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>Edad: {age} - Género: {gender}</Text>

          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
              {currentQuestion.question}
            </Text>

            <View style={{ marginTop: 16, gap: 10 }}>
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
    </Screen>
  );
};

export default Quiz;
