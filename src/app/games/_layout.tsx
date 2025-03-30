import React from 'react';
import { Stack } from 'expo-router';

import { RoutineColors } from '@/constants/colors';

import useAppStore from '@/stores';

const Games = () => {
  const { routine } = useAppStore();

  return (
    <Stack>
      <Stack.Screen
        name="interactive"
        options={{
          title: 'Interactivo',
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
        }}
      />
      <Stack.Screen
        name="quiz"
        options={{
          title: 'Quiz',
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
        }}
      />
      <Stack.Screen
        name="sort"
        options={{
          title: 'Ordenar',
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
        }}
      />
    </Stack>
  );
};

export default Games;
