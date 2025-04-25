import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Screen from '@/components/Screen';
import useAppStore from '@/stores';
import InteractivoDucha from '@/components/InteractivoDucha';

const Interactive = () => {
  const { age, gender, routine } = useAppStore();

  const isMale12Plus = gender === 'male' && Number(age) >= 12;

  return (
    <Screen title="Interactivo">
      {isMale12Plus ? (
        <InteractivoDucha />
      ) : (
        <View>
          <InteractivoDucha />
        </View>
      )}
    </Screen>
  );
};

export default Interactive;
