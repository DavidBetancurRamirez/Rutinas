import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

import { Step } from '@/data/routineStepsData';

const RoutineOption = ({ image, name }: Omit<Step, 'id'>) => {
  return (
    <>
      <Image source={image} style={styles.optionImage} />
      <Text style={styles.optionText}>{name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  optionImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  optionText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default RoutineOption;
