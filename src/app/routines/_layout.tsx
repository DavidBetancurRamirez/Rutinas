import React from 'react';
import { Stack } from 'expo-router';

import { Colors } from '@/constants/Theme';

const Routines = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Rutinas' }} />
      <Stack.Screen
        name="shower"
        options={{
          title: 'Ducha',
          headerStyle: { backgroundColor: Colors.yellow },
        }}
      />
      <Stack.Screen
        name="bathroom"
        options={{
          title: 'Ir al baño',
          headerStyle: { backgroundColor: Colors.green },
        }}
      />
      <Stack.Screen
        name="teeth"
        options={{
          title: 'Lavar los dientes',
          headerStyle: { backgroundColor: Colors.orange },
        }}
      />
    </Stack>
  );
};

export default Routines;
