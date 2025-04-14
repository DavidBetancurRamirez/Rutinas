import React from 'react';
import { useRouter } from 'expo-router';

import Screen from './Screen';
import { GAMES } from '@/constants';

interface RoutineProps {
  title: string;
}

const Routine: React.FC<RoutineProps> = ({ title }) => {
  const router = useRouter();

  const handlePress = (game: GAMES) => {
    router.push(`/games/${game}`);
  };

  return (
    <Screen
      title={title}
      cards={[
        {
          image: { source: require('@/assets/images/games/interactive.png') },
          text: { children: 'Interactivo' },
          cardProps: {
            onPress: () => handlePress(GAMES.INTERACTIVE),
          },
        },
        {
          image: { source: require('@/assets/images/games/sort.png') },
          text: { children: 'Ordenar' },
          cardProps: {
            onPress: () => handlePress(GAMES.SORT),
          },
        },
        {
          image: { source: require('@/assets/images/games/quiz.png') },
          text: { children: 'Quiz' },
          cardProps: {
            onPress: () => handlePress(GAMES.QUIZ),
          },
        },
      ]}
    />
  );
};

export default Routine;
