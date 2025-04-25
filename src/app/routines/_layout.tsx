import React from 'react';
import { Stack } from 'expo-router';

import { RoutineColors } from '@/constants/colors';
import { routineName } from '@/constants/names';
import { ROUTINES } from '@/constants';

const Routines = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Rutinas' }} />
      <Stack.Screen
        name="shower"
        options={{
          title: routineName[ROUTINES.SHOWER],
          headerStyle: { backgroundColor: RoutineColors.shower },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="bathroom"
        options={{
          title: routineName[ROUTINES.BATHROOM],
          headerStyle: { backgroundColor: RoutineColors.bathroom },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="teeth"
        options={{
          title: routineName[ROUTINES.TEETH],
          headerStyle: { backgroundColor: RoutineColors.teeth },
          headerTintColor: 'white',
        }}
      />
    </Stack>
  );
};

export default Routines;
