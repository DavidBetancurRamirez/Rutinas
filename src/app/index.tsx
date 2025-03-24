import React from 'react';
import { useRouter } from 'expo-router';

import Screen from '@/components/Screen';
import ViewContainer from '@/components/ViewContainer';

const Index = () => {
  const router = useRouter();

  return (
    <ViewContainer>
      <Screen
        title="Bienvenid@ a Rutinas"
        cards={[
          {
            text: 'Comenzar',
            onPress: () => router.push('/options'),
          },
          {
            text: 'Crea tu rutina',
          },
          {
            text: 'Creditos',
          },
        ]}
      />
    </ViewContainer>
  );
};

export default Index;
