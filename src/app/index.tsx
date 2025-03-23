import ViewContainer from '@/components/ViewContainer';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  return (
    <ViewContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bienvenid@ a Rutinas</Text>
      </View>
    </ViewContainer>
  );
};

export default Index;
