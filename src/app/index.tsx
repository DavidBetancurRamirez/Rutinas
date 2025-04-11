import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';

import CreditsModal from '@/components/CreditsModal';
import Screen from '@/components/Screen';
import ViewContainer from '@/components/ViewContainer';

import useAppStore from '@/stores';

const Index = () => {
  const router = useRouter();
  const { clearState } = useAppStore();

  const [showModal, setShowModal] = useState(false);

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
            text: { children: 'Comenzar' },
            cardProps: {
              onPress: () => router.push('/options'),
            },
          },
          {
            text: { children: 'Crea tu rutina' },
          },
          {
            text: { children: 'Creditos' },
            cardProps: {
              onPress: () => setShowModal(true),
            },
          },
        ]}
      >
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../assets/images/logo_aula_abierta.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../assets/images/logo_eia.png')}
          />
        </View>
      </Screen>
      <CreditsModal visible={showModal} onClose={() => setShowModal(false)} />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    aspectRatio: 1,
    width: '40%',
    marginBottom: 10,
    marginHorizontal: 'auto',
  },
});

export default Index;
