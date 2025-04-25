import React from 'react';
import { Stack } from 'expo-router';

import { RoutineColors } from '@/constants/colors';

import useAppStore from '@/stores';
import { gameName } from '@/constants/names';
import { GAMES } from '@/constants';

const Games = () => {
  const { routine } = useAppStore();

  return (
    <Stack>
      <Stack.Screen
        name="interactive"
        options={{
          title: gameName[GAMES.INTERACTIVE],
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="quiz"
        options={{
          title: gameName[GAMES.QUIZ],
          headerStyle: {
            backgroundColor: routine ? RoutineColors[routine] : 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="sort"
        options={{
          title: gameName[GAMES.SORT],
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
