import React from 'react';
import { useRouter } from 'expo-router';

import Screen from '@/components/Screen';

import { RoutineColors } from '@/constants/colors';
import { ROUTINES } from '@/constants';

import useAppStore from '@/stores';

const Index = () => {
  const router = useRouter();
  const { setRoutine } = useAppStore();

  const handlePress = (routine: ROUTINES) => {
    router.push(`/routines/${routine}`);
    setRoutine(routine);
  };

  return (
    <Screen
      title="Elige tu rutina"
      cards={[
        {
          onPress: () => handlePress(ROUTINES.SHOWER),
          style: { backgroundColor: RoutineColors.shower },
          text: 'Ducha',
        },
        {
          onPress: () => handlePress(ROUTINES.BATHROOM),
          style: { backgroundColor: RoutineColors.bathroom },
          text: 'Ir al baño',
        },
        {
          onPress: () => handlePress(ROUTINES.TEETH),
          style: { backgroundColor: RoutineColors.teeth },
          text: 'Lavar los dientes',
        },
      ]}
    />
  );
};

export default Index;
