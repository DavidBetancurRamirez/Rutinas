import { View, Text, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from './Card';

import { Colors } from '@/constants/colors';

type GameFinishedProps = {
  backButtonText?: string;
  onBack: () => void;
  onClose: () => void;
  onRetry: () => void;
  retryButtonText?: string;
  subtitle: string;
  title?: string;
  visible: boolean;
};

const GameFinished = ({
  backButtonText = 'Regresar',
  onBack,
  onClose,
  onRetry,
  retryButtonText = 'Repetir',
  subtitle,
  title = '¡Felicitaciones!',
  visible,
}: GameFinishedProps) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Ionicons
            name="trophy-outline"
            size={60}
            color={Colors.success}
            style={styles.emoji}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>

          <View style={styles.buttons}>
            <Card
              onPress={onBack}
              style={styles.button}
              text={backButtonText}
            />
            <Card
              onPress={onRetry}
              style={[styles.button, styles.secondary]}
              text={retryButtonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 15,
    elevation: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '80%',
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
