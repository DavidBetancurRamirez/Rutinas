import React, { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Card from '@/components/Card';
import Screen from '@/components/Screen';

import { Colors } from '@/constants/colors';

import { Step } from '@/data/routineStepsData';

const routineSteps: Step[] = [
  {
    id: 'wake_up',
    name: 'Despertarse',
    image: require('@/assets/images/routines/bathroom.png'),
  },
  {
    id: 'brush_teeth',
    name: 'Cepillarse',
    image: require('@/assets/images/routines/shower.png'),
  },
  {
    id: 'eat_breakfast',
    name: 'Desayunar',
    image: require('@/assets/images/routines/teeth.png'),
  },
  {
    id: 'wake_up2',
    name: 'Despertarse',
    image: require('@/assets/images/routines/bathroom.png'),
  },
  {
    id: 'brush_teeth2',
    name: 'Cepillarse',
    image: require('@/assets/images/routines/shower.png'),
  },
  {
    id: 'eat_breakfast2',
    name: 'Desayunar',
    image: require('@/assets/images/routines/teeth.png'),
  },
];

const Sort = () => {
  // const { age, gender, routine } = useAppStore();

  const [userAnswers, setUserAnswers] = useState<(Step | null)[]>(
    Array(routineSteps.length).fill(null),
  );
  const [selectedOption, setSelectedOption] = useState<Step | null>(null);
  const [incorrectIndex, setIncorrectIndex] = useState<number | null>(null);

  const [shuffledOptions, setShuffledOptions] = useState<Step[]>([]);

  useFocusEffect(
    useCallback(() => {
      setShuffledOptions([...routineSteps].sort(() => Math.random() - 0.5));
    }, []),
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

  return (
    <Screen title="Ordenar">
      <View style={styles.grid}>
        {userAnswers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slot,
              incorrectIndex === index && styles.incorrectSlot,
              answer && styles.correctSlot,
            ]}
            onPress={() => handleSlotPress(index)}
            disabled={!!answer}
          >
            {answer ? (
              <Option image={answer.image} name={answer.name} />
            ) : (
              <Text style={styles.placeholder}>?</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.grid, { marginTop: 30 }]}>
        {shuffledOptions.map((option, index) => {
          const used = isOptionUsed(option);
          return (
            <Card
              key={index}
              style={[
                styles.slot,
                styles.option,
                selectedOption?.id === option.id && styles.selectedOption,
                selectedOption &&
                  selectedOption?.id !== option.id &&
                  styles.otherOption,
                used && styles.disabledOption,
              ]}
              onPress={() => !used && setSelectedOption(option)}
            >
              <Option image={option.image} name={option.name} />
            </Card>
          );
        })}
      </View>
    </Screen>
  );
};

const Option = ({ image, name }: Omit<Step, 'id'>) => {
  return (
    <>
      <Image source={image} style={styles.optionImage} />
      <Text style={styles.optionText}>{name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
    marginTop: 20,
  },
  slot: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },
  correctSlot: {
    borderColor: Colors.success,
  },
  incorrectSlot: {
    borderColor: Colors.error,
    backgroundColor: '#ffe5e5',
  },
  placeholder: {
    fontSize: 30,
    color: '#ccc',
  },
  option: {
    flexDirection: 'column',
    backgroundColor: '#eaf6ff',
  },
  selectedOption: {
    borderColor: Colors.blue,
    backgroundColor: '#d0ecff',
  },
  otherOption: {
    opacity: 0.8,
  },
  disabledOption: {
    opacity: 0.4,
  },
  optionImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Sort;
