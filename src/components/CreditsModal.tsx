import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/colors';
import { ExternalLink } from './ExternalLink';

interface CreditsModalProps {
  visible: boolean;
  onClose: () => void;
}

const CreditsModal: React.FC<CreditsModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Universidad EIA</Text>
            <Ionicons name="close" onPress={onClose} size={30} />
          </View>

          <View style={styles.creditsNameContainer}>
            <CreditName
              name="David Betancur"
              githubUrl="https://github.com/DavidBetancurRamirez"
            />
            <CreditName
              name="Pedro Juan Henao"
              githubUrl="https://github.com/PedroJuanHenaoVelez"
            />
            <CreditName
              name="Santiago Toro"
              githubUrl="https://github.com/Santy30-Bull"
            />
          </View>

          <Text style={styles.company}>
            Para la Fundación{' '}
            <ExternalLink
              href="https://www.aulaabierta.edu.co/"
              style={styles.foundation}
            >
              {'Aula Abierta'.replace(' ', '\u00A0')}
            </ExternalLink>
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const CreditName = ({
  name,
  githubUrl,
}: {
  name: string;
  githubUrl: string;
}) => {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{name}</Text>
      <ExternalLink href={githubUrl}>
        <Ionicons name="logo-github" size={20} />
      </ExternalLink>
    </View>
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
    backgroundColor: Colors.background,
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center',
  },
  creditsNameContainer: {
    marginVertical: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
  },
  company: {
    fontSize: 18,
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
    borderBlockColor: 'black',
    borderStyle: 'dashed',
    borderTopWidth: 1,
    textAlign: 'center',
  },
  foundation: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default CreditsModal;
