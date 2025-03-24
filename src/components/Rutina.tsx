import React from 'react';
import { useRouter } from 'expo-router';

import Screen from './Screen';

interface RutinaProps {
  title: string;
}

const Rutina: React.FC<RutinaProps> = ({ title }) => {
  const router = useRouter();

  return (
    <Screen
      title={title}
      cards={[
        {
          onPress: () => router.push('/games/interactive'),
          text: 'Interactivo',
        },
        {
          onPress: () => router.push('/games/quiz'),
          text: 'Quiz',
        },
        {
          onPress: () => router.push('/games/sort'),
          text: 'Ordenar',
        },
      ]}
    />
  );
};

export default Rutina;
