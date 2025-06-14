import React from 'react';
import { Stack } from 'expo-router';

import { RoutineColors } from '@/constants/colors';

import { gameName, routineName } from '@/constants/names';
import { GAMES } from '@/constants';

import useAppStore from '@/stores';

const Games = () => {
  const { routine } = useAppStore();

  return (
    <Stack>
      <Stack.Screen
        name="interactive"
        options={{
          title: `${gameName[GAMES.INTERACTIVE]} - ${routine && routineName[routine]}`,
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="quiz"
        options={{
          title: `${gameName[GAMES.QUIZ]} - ${routine && routineName[routine]}`,
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="sort"
        options={{
          title: `${gameName[GAMES.SORT]} - ${routine && routineName[routine]}`,
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack>
  );
};

export default Games;
