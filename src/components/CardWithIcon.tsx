import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ImageProps, StyleSheet, Text, TextProps } from 'react-native';

import Card, { CardProps } from './Card';

export interface CardWithIconProps {
  icon?: React.ComponentProps<typeof Ionicons>;
  image?: ImageProps;
  cardProps?: CardProps;
  text: TextProps;
}

const CardWithIcon: React.FC<CardWithIconProps> = ({
  icon,
  image,
  cardProps,
  text,
}) => {
  return (
    <Card {...cardProps} style={[styles.cardStyle, cardProps?.style]}>
      {icon && (
        <Ionicons
          color="white"
          size={50}
          {...icon}
          style={[styles.icon, icon.style]}
        />
      )}
      {image && <Image {...image} style={[styles.image, image.style]} />}
      <Text {...text} style={[styles.text, text.style]} />
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    padding: 15,
    flexDirection: 'column',
  },
  icon: {
    marginBottom: 5,
  },
  image: {
    tintColor: 'white',
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default CardWithIcon;
