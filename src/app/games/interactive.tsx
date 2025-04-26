import React from 'react';
import { View } from 'react-native';

import InteractivoDucha from '@/components/InteractivoDucha';
import Screen from '@/components/Screen';

import useAppStore from '@/stores';

const Interactive = () => {
  const { age, gender } = useAppStore();

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
