import React, { useCallback } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';

import Screen from '@/components/Screen';
import ViewContainer from '@/components/ViewContainer';
import useAppStore from '@/stores';

const Index = () => {
  const router = useRouter();
  const { clearState } = useAppStore();

  useFocusEffect(
    useCallback(() => {
      clearState();
    }, [clearState]),
  );

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
