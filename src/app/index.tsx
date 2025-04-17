import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import CreditsModal from '@/components/CreditsModal';
import Screen from '@/components/Screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Screen
        title="Bienvenid@ a Rutinas"
        childrenProps={{ style: { alignSelf: 'stretch' } }}
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
      >
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('@/assets/images/logo_aula_abierta.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('@/assets/images/logo_eia.png')}
          />
        </View>
      </Screen>
      <CreditsModal visible={showModal} onClose={() => setShowModal(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    aspectRatio: 1,
    width: '40%',
    maxWidth: 150,
    marginBottom: 10,
    marginHorizontal: 'auto',
  },
});

export default Index;
