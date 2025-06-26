import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import Card from '@/components/Card';
import CardWithIcon from '@/components/CardWithIcon';
import Screen from '@/components/Screen';

import { Colors } from '@/constants/colors';
import { AGES, GENDERS } from '@/constants';

import useAppStore from '@/stores';
import { genderName } from '@/constants/names';

const opacityOption = 0.8;

const Options = () => {
  const router = useRouter();
  const { age, gender, setAge, setGender } = useAppStore();

  return (
    <Screen title="Elige tu modo de juego">
      <View style={styles.container}>
        <Text style={styles.subTitle}>Género</Text>
        <View style={styles.optionContainer}>
          <CardWithIcon
            image={{ source: require('@/assets/images/options/icon_man.png') }}
            text={{ children: genderName[GENDERS.MALE] }}
            cardProps={{
              onPress: () => setGender(GENDERS.MALE),
              style: {
                backgroundColor: Colors.blue,
                opacity: gender === GENDERS.FEMALE ? opacityOption : 1,
                ...styles.cardStyle,
              },
            }}
          />
          <CardWithIcon
            image={{
              source: require('@/assets/images/options/icon_woman.png'),
            }}
            text={{ children: genderName[GENDERS.FEMALE] }}
            cardProps={{
              onPress: () => setGender(GENDERS.FEMALE),
              style: {
                backgroundColor: Colors.violet,
                opacity: gender === GENDERS.MALE ? opacityOption : 1,
                ...styles.cardStyle,
              },
            }}
          />
        </View>

        <Text style={styles.subTitle}>Edad</Text>
        <View style={styles.optionContainer}>
          <CardWithIcon
            image={{ source: require('@/assets/images/options/icon_kids.png') }}
            text={{ children: '0-11 años' }}
            cardProps={{
              onPress: () => setAge(AGES.CHILD),
              style: {
                backgroundColor: Colors.yellow,
                opacity: age === AGES.TEEN ? opacityOption : 1,
                ...styles.cardStyle,
              },
            }}
          />
          <CardWithIcon
            image={{
              source: require('@/assets/images/options/icon_teens.png'),
            }}
            text={{ children: '+12 años' }}
            cardProps={{
              onPress: () => setAge(AGES.TEEN),
              style: {
                backgroundColor: Colors.orange,
                opacity: age === AGES.CHILD ? opacityOption : 1,
                ...styles.cardStyle,
              },
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
