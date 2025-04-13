import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  View,
  type ViewProps,
} from 'react-native';

import CardWithIcon, { CardWithIconProps } from '@/components/CardWithIcon';

import { Colors } from '@/constants/colors';

interface ScreenProps extends ViewProps {
  containerStyle?: ViewProps['style'];
  cards?: CardWithIconProps[];
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
              const { cardProps, text, ...rest } = option;
              return (
                <CardWithIcon
                  key={index}
                  text={{
                    ...text,
                    style: [styles.cardText, text?.style],
                  }}
                  cardProps={{
                    ...cardProps,
                    style: [styles.card, cardProps?.style],
                  }}
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

export const genericMargin = 10;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: genericMargin,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
    gap: 30,
  },
  card: {
    width: '80%',
    backgroundColor: Colors.blue,
    padding: 30,
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  childrenContainer: {
    alignSelf: 'stretch',
  },
});

export default Screen;
