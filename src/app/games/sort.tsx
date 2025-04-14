import React, { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import Card from '@/components/Card';
import RoutineOption, { FillEmptyOptions } from '@/components/RoutineOption';
import Screen, { genericMargin } from '@/components/Screen';

import { Colors } from '@/constants/colors';

import { Step } from '@/data/routineStepsData';

import { useRoutineSteps } from '@/hooks/useRoutineSteps';

import useAppStore from '@/stores';

import { createGridStyles } from '@/utils/routineGrid.styles';
import { getFillerCount } from '@/utils/getFillerCount';

const SLOT_SIZE = 90;
const SLOT_GAP = 10;

const gridStyles = createGridStyles({ slotSize: SLOT_SIZE, slotGap: SLOT_GAP });

const Sort = () => {
  const { age, gender, routine } = useAppStore();
  const routineSteps = useRoutineSteps({
    age,
    gender,
    routine,
  });

  const [userAnswers, setUserAnswers] = useState<(Step | null)[]>(
    Array(routineSteps.length).fill(null),
  );
  const [selectedOption, setSelectedOption] = useState<Step | null>(null);
  const [incorrectIndex, setIncorrectIndex] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<Step[]>([]);

  const { width: screenWidth } = useWindowDimensions();
  const fillerCount = getFillerCount(
    screenWidth - genericMargin,
    SLOT_SIZE + SLOT_GAP,
    userAnswers.length,
  );

  useFocusEffect(
    useCallback(() => {
      setShuffledOptions([...routineSteps].sort(() => Math.random() - 0.5));
    }, [routineSteps]),
  );

  const handleSlotPress = (index: number) => {
    if (!selectedOption) return;

    const correctStep = routineSteps[index];
    if (selectedOption.id === correctStep.id) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[index] = selectedOption;
      setUserAnswers(updatedAnswers);
      setSelectedOption(null);
    } else {
      setIncorrectIndex(index);
      setTimeout(() => setIncorrectIndex(null), 2000);
    }
  };

  const isOptionUsed = (step: Step) =>
    userAnswers.some((answer) => answer?.id === step.id);

  const isOptionUsedCorrectly = (option: Step): boolean => {
    return routineSteps.some((correctStep, index) => {
      return (
        userAnswers[index]?.id === correctStep.id &&
        option.id === correctStep.id
      );
    });
  };

  const sortedOptions = [...shuffledOptions].sort((a, b) => {
    const aUsed = isOptionUsedCorrectly(a);
    const bUsed = isOptionUsedCorrectly(b);

    if (aUsed === bUsed) return 0;
    return aUsed ? 1 : -1;
  });

  return (
    <Screen
      title="Ordena la rutina de ducha"
      titleProps={{ style: styles.title }}
    >
      <ScrollView style={styles.scrollView}>
        <View style={gridStyles.grid}>
          {userAnswers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={[
                gridStyles.slot,
                incorrectIndex === index && styles.incorrectSlot,
                answer && styles.correctSlot,
              ]}
              onPress={() => handleSlotPress(index)}
              disabled={!!answer}
            >
              {answer ? (
                <RoutineOption image={answer.image} name={answer.name} />
              ) : (
                <Text style={styles.placeholder}>{index + 1}</Text>
              )}
            </TouchableOpacity>
          ))}

          {FillEmptyOptions(fillerCount, SLOT_SIZE, SLOT_GAP)}
        </View>

        <Text style={styles.info}>
          Selecciona una opcion de las siguientes y presiona en su espacio
          correspondiente
        </Text>
        <View style={gridStyles.grid}>
          {sortedOptions.map((option) => {
            const used = isOptionUsed(option);
            return (
              <Card
                key={option.id}
                style={[
                  gridStyles.slot,
                  gridStyles.option,
                  selectedOption?.id === option.id && styles.selectedOption,
                  selectedOption &&
                    selectedOption?.id !== option.id &&
                    styles.otherOption,
                  used && styles.disabledOption,
                ]}
                onPress={() => !used && setSelectedOption(option)}
              >
                <RoutineOption image={option.image} name={option.name} />
              </Card>
            );
          })}

          {FillEmptyOptions(fillerCount, SLOT_SIZE, SLOT_GAP)}
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  scrollView: {
    marginVertical: 10,
  },
  correctSlot: {
    borderColor: Colors.success,
    backgroundColor: '#fff',
  },
  incorrectSlot: {
    borderColor: Colors.error,
    backgroundColor: '#ffe5e5',
  },
  placeholder: {
    fontSize: 30,
    color: '#ccc',
  },
  info: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: Colors.blue,
  },
  otherOption: {
    opacity: 0.8,
  },
  disabledOption: {
    opacity: 0.4,
  },
});

export default Sort;
