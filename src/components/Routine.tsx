import React from 'react';
import { useRouter } from 'expo-router';

import Screen from './Screen';

import { GAMES, ROUTINES } from '@/constants';
import { gameName, routineName } from '@/constants/names';

interface RoutineProps {
  routine: ROUTINES;
}

const Routine: React.FC<RoutineProps> = ({ routine }) => {
  const router = useRouter();

  const handlePress = (game: GAMES) => {
    router.push(`/games/${game}`);
  };

  return (
    <Screen
      title={`Juegos para la rutina de ${routineName[routine].toLowerCase()}`}
      cards={[
        {
          image: { source: require('@/assets/images/games/quiz.png') },
          text: { children: gameName[GAMES.QUIZ] },
          cardProps: {
            onPress: () => handlePress(GAMES.QUIZ),
          },
        },
        {
          image: { source: require('@/assets/images/games/interactive.png') },
          text: { children: gameName[GAMES.INTERACTIVE] },
          cardProps: {
            onPress: () => handlePress(GAMES.INTERACTIVE),
          },
        },
        {
          image: { source: require('@/assets/images/games/sort.png') },
          text: { children: gameName[GAMES.SORT] },
          cardProps: {
            onPress: () => handlePress(GAMES.SORT),
          },
        },
      ]}
    />
  );
};

export default Routine;
