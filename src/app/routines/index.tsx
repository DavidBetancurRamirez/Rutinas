import React from 'react';
import { useRouter } from 'expo-router';

import Screen from '@/components/Screen';

import { RoutineColors } from '@/constants/colors';
import { routineName } from '@/constants/names';
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
          image: { source: require('@/assets/images/routines/shower.webp') },
          text: { children: routineName[ROUTINES.SHOWER] },
          cardProps: {
            onPress: () => handlePress(ROUTINES.SHOWER),
            style: { backgroundColor: RoutineColors.shower },
          },
        },
        {
          image: { source: require('@/assets/images/routines/bathroom.webp') },
          text: { children: routineName[ROUTINES.BATHROOM] },
          cardProps: {
            onPress: () => handlePress(ROUTINES.BATHROOM),
            style: { backgroundColor: RoutineColors.bathroom },
          },
        },
        {
          image: { source: require('@/assets/images/routines/teeth.webp') },
          text: { children: routineName[ROUTINES.TEETH] },
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
