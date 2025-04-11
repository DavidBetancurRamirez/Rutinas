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
          image: { source: require('@/assets/images/routines/shower.png') },
          text: { children: 'Ducha' },
          cardProps: {
            onPress: () => handlePress(ROUTINES.SHOWER),
            style: { backgroundColor: RoutineColors.shower },
          },
        },
        {
          image: { source: require('@/assets/images/routines/bathroom.png') },
          text: { children: 'Ir al baño' },
          cardProps: {
            onPress: () => handlePress(ROUTINES.BATHROOM),
            style: { backgroundColor: RoutineColors.bathroom },
          },
        },
        {
          image: { source: require('@/assets/images/routines/teeth.png') },
          text: { children: 'Lavar los dientes' },
          cardProps: {
            onPress: () => handlePress(ROUTINES.TEETH),
            style: { backgroundColor: RoutineColors.teeth },
          },
        },
      ]}
    />
  );
};

export default Index;
