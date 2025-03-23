import React, { useRef } from 'react';
import {
  Pressable,
  Animated,
  StyleSheet,
  type ViewProps,
  GestureResponderEvent,
  View,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface CardProps extends ViewProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const Card: React.FC<CardProps> = ({ children, style, onPress, ...rest }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={{ transform: [{ scale }] }}
    >
      <View style={[styles.card, style]} {...rest}>
        {children}
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
  },
});

export default Card;
