import React from 'react';
import { Text } from 'react-native';

import Screen from '@/components/Screen';

import useAppStore from '@/stores';

const Interactive = () => {
  const { age, gender, routine } = useAppStore();

  return (
    <Screen title="Interactivo">
      <Text>Modo de juego para {routine}</Text>
      <Text>Age: {age}</Text>
      <Text>Gender: {gender}</Text>
    </Screen>
  );
};

export default Interactive;
