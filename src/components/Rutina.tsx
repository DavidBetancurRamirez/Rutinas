import React from 'react';
import { useRouter } from 'expo-router';

import Screen from './Screen';
import { GAMES } from '@/constants';

interface RutinaProps {
  title: string;
}

const Rutina: React.FC<RutinaProps> = ({ title }) => {
  const router = useRouter();

  const handlePress = (game: GAMES) => {
    router.push(`/games/${game}`);
  };

  return (
    <Screen
      title={title}
      cards={[
        {
          onPress: () => handlePress(GAMES.INTERACTIVE),
          text: 'Interactivo',
        },
        {
          onPress: () => handlePress(GAMES.QUIZ),
          text: 'Quiz',
        },
        {
          onPress: () => handlePress(GAMES.SORT),
          text: 'Ordenar',
        },
      ]}
    />
  );
};

export default Rutina;
