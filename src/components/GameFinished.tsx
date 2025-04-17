import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from './Card';

import { Colors } from '@/constants/colors';

type GameFinishedProps = {
  backButtonText?: string;
  onBack: () => void;
  onRetry: () => void;
  retryButtonText?: string;
  subtitle?: string;
  title?: string;
};

const GameFinished = ({
  backButtonText = 'Regresar',
  onBack,
  onRetry,
  retryButtonText = 'Repetir',
  subtitle = 'Has completado la rutina correctamente',
  title = '¡Felicitaciones!',
}: GameFinishedProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="trophy-outline"
        size={60}
        color={Colors.success}
        style={styles.emoji}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.buttons}>
        <Card onPress={onBack} style={styles.button} text={backButtonText} />
        <Card
          onPress={onRetry}
          style={[styles.button, styles.secondary]}
          text={retryButtonText}
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
    color: Colors.success,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.green,
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
