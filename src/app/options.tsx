import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

import Card from '@/components/Card';
import OptionsScreen from '@/components/Screen';

import { Colors } from '@/constants/Theme';

const Options = () => {
  const router = useRouter();

  return (
    <OptionsScreen title="Elige tu modo de juego">
      <View style={styles.container}>
        <Text style={styles.subTitle}>Género</Text>
        <View style={styles.optionContainer}>
          <Card style={[styles.cardStyle, { backgroundColor: Colors.blue }]}>
            <Image
              source={require('../assets/images/icon_male.png')}
              style={styles.image}
            />
            <Text style={styles.optionText}>Hombre</Text>
          </Card>
          <Card style={[styles.cardStyle, { backgroundColor: Colors.violet }]}>
            <Image
              source={require('../assets/images/icon_female.png')}
              style={styles.image}
            />
            <Text style={styles.optionText}>Mujer</Text>
          </Card>
        </View>

        <Text style={styles.subTitle}>Edad</Text>
        <View style={styles.optionContainer}>
          <Card style={[styles.cardStyle, { backgroundColor: Colors.yellow }]}>
            <Image
              source={require('../assets/images/icon_kids.png')}
              style={styles.image}
            />
            <Text style={styles.optionText}>0-11 años</Text>
          </Card>
          <Card style={[styles.cardStyle, { backgroundColor: Colors.orange }]}>
            <Image
              source={require('../assets/images/icon_teens.png')}
              style={styles.image}
            />
            <Text style={styles.optionText}>+12 años</Text>
          </Card>
        </View>

        <Card
          text="Aceptar"
          style={styles.button}
          onPress={() => router.navigate('/routines')}
        />
      </View>
    </OptionsScreen>
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
