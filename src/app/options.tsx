import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

import Card from '@/components/Card';
import Screen from '@/components/Screen';

import { Colors } from '@/constants/colors';
import { AGES, GENDERS } from '@/constants';

import useAppStore from '@/stores';

const opacityOption = 0.7;

const Options = () => {
  const router = useRouter();
  const { age, gender, setAge, setGender } = useAppStore();

  return (
    <Screen title="Elige tu modo de juego">
      <View style={styles.container}>
        <Text style={styles.subTitle}>Género</Text>
        <View style={styles.optionContainer}>
          <OptionCard
            image={require('../assets/images/icon_male.png')}
            onPress={() => setGender(GENDERS.MALE)}
            text="Hombre"
            style={{
              backgroundColor: Colors.blue,
              opacity: gender === GENDERS.FEMALE ? opacityOption : 1,
            }}
          />
          <OptionCard
            image={require('../assets/images/icon_female.png')}
            onPress={() => setGender(GENDERS.FEMALE)}
            text="Mujer"
            style={{
              backgroundColor: Colors.violet,
              opacity: gender === GENDERS.MALE ? opacityOption : 1,
            }}
          />
        </View>

        <Text style={styles.subTitle}>Edad</Text>
        <View style={styles.optionContainer}>
          <OptionCard
            image={require('../assets/images/icon_kids.png')}
            onPress={() => setAge(AGES.CHILD)}
            text="0-11 años"
            style={{
              backgroundColor: Colors.yellow,
              opacity: age === AGES.TEEN ? opacityOption : 1,
            }}
          />
          <OptionCard
            image={require('../assets/images/icon_teens.png')}
            onPress={() => setAge(AGES.TEEN)}
            text="+12 años"
            style={{
              backgroundColor: Colors.orange,
              opacity: age === AGES.CHILD ? opacityOption : 1,
            }}
          />
        </View>

        <Card
          disabled={age === '' || gender === ''}
          text="Aceptar"
          style={styles.button}
          onPress={() => router.navigate('/routines')}
        />
      </View>
    </Screen>
  );
};

interface OptionCardProps {
  style?: ViewStyle;
  image: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  style,
  image,
  text,
  onPress,
}) => {
  return (
    <Card style={[styles.cardStyle, style]} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.optionText}>{text}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '95%',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 30,
  },
  cardStyle: {
    width: '45%',
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    tintColor: 'white',
    height: 50,
    width: 50,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  button: {
    backgroundColor: Colors.green,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default Options;
