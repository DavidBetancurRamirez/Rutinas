import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CreditsModal from '@/components/CreditsModal';
import Screen, { genericMargin } from '@/components/Screen';

const Index = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            text: { children: 'Tus rutinas' },
            cardProps: {
              onPress: () => router.push('/routine_viewer'),
            },
          },
          {
            text: { children: 'Creditos' },
            cardProps: {
              onPress: () => setShowModal(true),
            },
          },
        ]}
      />

      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('@/assets/images/logo_aula_abierta.webp')}
        />
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('@/assets/images/logo_eia.webp')}
        />
      </View>

      <CreditsModal visible={showModal} onClose={() => setShowModal(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  logo: {
    aspectRatio: 1,
    width: '40%',
    maxWidth: 150,
    marginBottom: genericMargin,
    marginHorizontal: 'auto',
    height: 'auto',
  },
});

export default Index;
