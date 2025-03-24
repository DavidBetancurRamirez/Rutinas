import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '@/components/Card';
import ViewContainer from '@/components/ViewContainer';
import { Colors } from '@/constants/Theme';

const Index = () => {
  return (
    <ViewContainer style={styles.container}>
      <Text style={styles.title}>Bienvenid@ a Rutinas</Text>
      <View style={styles.cardsContainer}>
        <Card
          style={styles.card}
          text="Comenzar"
          textProps={{ style: styles.cardText }}
        />
        <Card
          style={[styles.card, { opacity: 0.5 }]}
          text="Crea tu rutina"
          textProps={{ style: styles.cardText }}
        />
        <Card
          style={styles.card}
          text="Creditos"
          textProps={{ style: styles.cardText }}
        />
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardsContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  card: {
    width: '80%',
    backgroundColor: Colors.blue,
    padding: 20,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default Index;
