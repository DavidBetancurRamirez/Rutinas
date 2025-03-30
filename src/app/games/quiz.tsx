import React from 'react';
import { Text } from 'react-native';

import Screen from '@/components/Screen';

import useAppStore from '@/stores';

const Quiz = () => {
  const { age, gender, routine } = useAppStore();

  return (
    <Screen title="Quiz">
      <Text>Modo de juego para {routine}</Text>
      <Text>Age: {age}</Text>
      <Text>Gender: {gender}</Text>
    </Screen>
  );
};

export default Quiz;
