import React from 'react';
import { useRouter } from 'expo-router';

import Screen from '@/components/Screen';

import { Colors } from '@/constants/Theme';

const Index = () => {
  const router = useRouter();

  return (
    <Screen
      title="Elige tu rutina"
      cards={[
        {
          onPress: () => router.push('/routines/shower'),
          style: { backgroundColor: Colors.yellow },
          text: 'Ducha',
        },
        {
          onPress: () => router.push('/routines/bathroom'),
          style: { backgroundColor: Colors.green },
          text: 'Ir al baño',
        },
        {
          onPress: () => router.push('/routines/teeth'),
          style: { backgroundColor: Colors.orange },
          text: 'Lavar los dientes',
        },
      ]}
    />
  );
};

export default Index;
