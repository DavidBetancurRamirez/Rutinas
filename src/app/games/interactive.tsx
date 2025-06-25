import React from 'react';
import { View } from 'react-native';
import Screen from '@/components/Screen';
import useAppStore from '@/stores';
import { AGES } from '@/constants';
import InteractivoDuchaH12 from '@/components/Ducha/InteractivoDuchaH12';
import InteractivoDuchaH0 from '@/components/Ducha/InteractivoDuchaH0';
import InteractivoDuchaM12 from '@/components/Ducha/InteractivoDuchaM12';
import InteractivoDuchaM0 from '@/components/Ducha/InteractivoDuchaM0';

import InteractivoDientesH12 from '@/components/Dientes/InteractivoDientesH12';
import InteractivoDientesH0 from '@/components/Dientes/InteractivoDientesH0';
import InteractivoDientesM12 from '@/components/Dientes/InteractivoDientesM12';
import InteractivoDientesM0 from '@/components/Dientes/InteractivoDientesM0';

import InteractivoBañoH0 from '@/components/Baño/InteractivoBañoH0';
import InteractivoBañoH12 from '@/components/Baño/InteractivoBañoH12';
import InteractivoBañoM0 from '@/components/Baño/InteractivoBañoM0';
import InteractivoBañoM12 from '@/components/Baño/InteractivoBañoM12';

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
  }else if (routine === 'bathroom'){
    return(
      <Screen title="Interactivo">
        {gender === 'male' ? (
          <View>
            {age === AGES.TEEN ? <InteractivoBañoH12 /> : <InteractivoBañoH0 />}
          </View>
        ) : gender === 'female' ? (
          <View>
            {age === AGES.TEEN ? <InteractivoBañoM12 /> : <InteractivoBañoM0 />}
          </View>
        ) : null}
      </Screen>
    )
  }
}

export default Interactive;