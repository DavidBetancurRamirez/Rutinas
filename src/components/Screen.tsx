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
      <View style={styles.content}>
        {cards && (
          <View style={styles.cardsContainer}>
            {cards.map((option, index) => {
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
        {children && <View style={styles.childrenContainer}>{children}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    flex: 1,
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
  childrenContainer: {
    alignSelf: 'stretch',
  },
});

export default Screen;
