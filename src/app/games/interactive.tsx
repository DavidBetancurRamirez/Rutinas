import React from 'react';
import { View } from 'react-native';
import Screen from '@/components/Screen';
import useAppStore from '@/stores';
import InteractivoDuchaH12 from '@/components/InteractivoDuchaH12';
import InteractivoDuchaH0 from '@/components/InteractivoDuchaH0';
import InteractivoDuchaM12 from '@/components/InteractivoDuchaM12';
import InteractivoDuchaM0 from '@/components/InteractivoDuchaM0';
import { AGES } from '@/constants';

const Interactive = () => {
  const { age, gender } = useAppStore();

  return (
    <Screen title="Interactivo">
      {gender === 'male' ? (
        <View>
          {age === AGES.TEEN ? <InteractivoDuchaH12 /> : <InteractivoDuchaH0 />}
        </View>
      ) : gender === 'female' ? (
        <View>
          {age === AGES.TEEN ? <InteractivoDuchaM12 /> : <InteractivoDuchaM0 />}
        </View>
      ) : null}
    </Screen>
  );
};

export default Interactive;
