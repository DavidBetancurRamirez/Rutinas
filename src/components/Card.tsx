import React, { ComponentProps, useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextProps,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface CardProps extends ComponentProps<typeof AnimatedPressable> {
  onPress?: (event: GestureResponderEvent) => void;
  text?: string;
  textProps?: TextProps;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  text,
  textProps,
  ...rest
}) => {
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
      style={[
        { transform: [{ scale }] },
        styles.card,
        style as unknown as object,
      ]}
      {...rest}
    >
      {children || (
        <Text {...textProps} style={[styles.text, textProps?.style]}>
          {text}
        </Text>
      )}
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
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Card;
