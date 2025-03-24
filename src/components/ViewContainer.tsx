import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const ViewContainer = ({ children, style }: SafeAreaViewProps) => {
  return <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>;
};

export default ViewContainer;
