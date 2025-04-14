import { View, Text, StyleSheet } from 'react-native';

import Card from './Card';
import { Colors } from '@/constants/colors';

type GameFinishedProps = {
  onRetry: () => void;
  onBack: () => void;
};

const GameFinished = ({ onRetry, onBack }: GameFinishedProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.title}>¡Felicitaciones!</Text>
      <Text style={styles.subtitle}>
        Has completado la rutina correctamente
      </Text>

      <View style={styles.buttons}>
        <Card onPress={onBack} style={styles.button} text="Regresar" />
        <Card
          onPress={onRetry}
          style={[styles.button, styles.secondary]}
          text="Repetir"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  subtitle: {
    fontSize: 18,
    color: '#4caf50',
    marginVertical: 10,
    textAlign: 'center',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: Colors.green,
  },
  secondary: {
    backgroundColor: Colors.success,
  },
});

export default GameFinished;
