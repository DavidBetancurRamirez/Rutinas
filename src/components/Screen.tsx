import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  View,
  type ViewProps,
} from 'react-native';

import Card, { CardProps } from '@/components/Card';

import { Colors } from '@/constants/colors';

interface ScreenProps extends ViewProps {
  containerStyle?: ViewProps['style'];
  cards?: CardProps[];
  title: string;
  titleProps?: TextProps;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  containerStyle,
  cards,
  titleProps,
  title,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text {...titleProps} style={[styles.title, titleProps?.style]}>
        {title}
      </Text>
      {cards && (
        <View style={styles.cardsContainer}>
          {cards?.map((option, index) => {
            const { style: optionStyle, ...rest } = option;
            return (
              <Card
                key={index}
                style={[styles.card, optionStyle]}
                textProps={{ style: styles.cardText }}
                {...rest}
              />
            );
          })}
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardsContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  card: {
    width: '80%',
    backgroundColor: Colors.blue,
    padding: 30,
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default Screen;
