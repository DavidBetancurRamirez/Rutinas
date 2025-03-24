import React from 'react';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Theme';

const Games = () => {
  return (
    <Stack>
      <Stack.Screen
        name="interactive"
        options={{
          title: 'Interactivo',
          headerStyle: { backgroundColor: Colors.yellow },
        }}
      />
      <Stack.Screen
        name="quiz"
        options={{
          title: 'Quiz',
          headerStyle: { backgroundColor: Colors.yellow },
        }}
      />
      <Stack.Screen
        name="sort"
        options={{
          title: 'Ordenar',
          headerStyle: { backgroundColor: Colors.yellow },
        }}
      />
    </Stack>
  );
};

export default Games;
