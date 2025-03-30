import React from 'react';
import { Stack } from 'expo-router';

import { RoutineColors } from '@/constants/colors';

const Routines = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Rutinas' }} />
      <Stack.Screen
        name="shower"
        options={{
          title: 'Ducha',
          headerStyle: { backgroundColor: RoutineColors.shower },
        }}
      />
      <Stack.Screen
        name="bathroom"
        options={{
          title: 'Ir al baño',
          headerStyle: { backgroundColor: RoutineColors.bathroom },
        }}
      />
      <Stack.Screen
        name="teeth"
        options={{
          title: 'Lavar los dientes',
          headerStyle: { backgroundColor: RoutineColors.teeth },
        }}
      />
    </Stack>
  );
};

export default Routines;
