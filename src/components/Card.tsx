import React, { ComponentProps, useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  ViewStyle,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface CardProps extends ComponentProps<typeof AnimatedPressable> {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle> | ViewStyle | undefined;
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
        StyleSheet.flatten(style),
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
    justifyContent: 'center',
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
