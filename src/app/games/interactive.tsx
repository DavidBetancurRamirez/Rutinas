import React from 'react';
import { View } from 'react-native';
import Screen from '@/components/Screen';
import useAppStore from '@/stores';
import { AGES } from '@/constants';
import InteractivoDuchaH12 from '@/components/InteractivoDuchaH12';
import InteractivoDuchaH0 from '@/components/InteractivoDuchaH0';
import InteractivoDuchaM12 from '@/components/InteractivoDuchaM12';
import InteractivoDuchaM0 from '@/components/InteractivoDuchaM0';

import InteractivoDientesH12 from '@/components/InteractivoDientesH12';
import InteractivoDientesH0 from '@/components/InteractivoDientesH0';
import InteractivoDientesM12 from '@/components/InteractivoDientesM12';
import InteractivoDientesM0 from '@/components/InteractivoDientesM0';

const Interactive = () => {
  const { age, gender, routine } = useAppStore();
  if (routine === 'shower') {
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
    )
  }else if (routine === 'teeth'){
    return(
      <Screen title="Interactivo">
        {gender === 'male' ? (
          <View>
            {age === AGES.TEEN ? <InteractivoDientesH12 /> : <InteractivoDientesH0 />}
          </View>
        ) : gender === 'female' ? (
          <View>
            {age === AGES.TEEN ? <InteractivoDientesM12 /> : <InteractivoDientesM0 />}
          </View>
        ) : null}
      </Screen>
    )
  }
};

export default Interactive;
