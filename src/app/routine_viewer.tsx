import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, useWindowDimensions } from 'react-native';
import { View, StyleSheet } from 'react-native';

import RoutineOption from '@/components/RoutineOption';
import Screen, { genericMargin } from '@/components/Screen';

import { AGES, GENDERS, ROUTINES } from '@/constants';

import { useRoutineSteps } from '@/hooks/useRoutineSteps';

import useAppStore from '@/stores';

import { getFillerCount } from '@/utils/getFillerCount';

const SLOT_SIZE = 100;
const SLOT_GAP = 10;

const RoutineViewer = () => {
  const {
    age: ageStore,
    gender: genderStore,
    routine: routineStore,
  } = useAppStore();

  const [age, setAge] = useState<AGES>(ageStore || AGES.CHILD);
  const [gender, setGender] = useState<GENDERS>(genderStore || GENDERS.MALE);
  const [routine, setRoutine] = useState<ROUTINES>(
    routineStore || ROUTINES.SHOWER,
  );

  const shouldShowRoutine = age && gender && routine;

  const steps = useRoutineSteps({ age, gender, routine });

  const { width: screenWidth } = useWindowDimensions();
  const fillerCount = getFillerCount(
    screenWidth - genericMargin,
    SLOT_SIZE + SLOT_GAP,
    steps.length,
  );

  return (
    <Screen title="Tus rutinas">
      <ScrollView style={styles.scrollView}>
        <View style={styles.pickerRow}>
          <Picker
            style={styles.picker}
            selectedValue={age}
            onValueChange={(itemValue) => setAge(itemValue)}
          >
            <Picker.Item label="Edad" value={null} enabled={false} />
            <Picker.Item label="Niño/a" value={AGES.CHILD} />
            <Picker.Item label="Adolescente" value={AGES.TEEN} />
          </Picker>

          <Picker
            style={styles.picker}
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Género" value={null} enabled={false} />
            <Picker.Item label="Hombre" value={GENDERS.MALE} />
            <Picker.Item label="Mujer" value={GENDERS.FEMALE} />
          </Picker>

          <Picker
            style={styles.picker}
            selectedValue={routine}
            onValueChange={(itemValue) => setRoutine(itemValue)}
          >
            <Picker.Item label="Rutina" value={null} enabled={false} />
            <Picker.Item label="Ducha" value={ROUTINES.SHOWER} />
            <Picker.Item label="Baño" value={ROUTINES.BATHROOM} />
            <Picker.Item label="Cepillado" value={ROUTINES.TEETH} />
          </Picker>
        </View>

        {shouldShowRoutine && (
          <View style={styles.grid}>
            {steps.map((step) => {
              return (
                <View key={step.id} style={[styles.slot, styles.step]}>
                  <RoutineOption image={step.image} name={step.name} />
                </View>
              );
            })}

            {Array.from({ length: fillerCount }).map((_, index) => (
              <View
                key={`filler-${index}`}
                style={[styles.slot, styles.fillerSlot]}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 10,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 10,
  },
  picker: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    minWidth: 150,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: SLOT_GAP,
  },
  slot: {
    width: SLOT_SIZE,
    minHeight: SLOT_SIZE,
    borderWidth: 2,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SLOT_SIZE / 4,
    backgroundColor: '#f0f0f0',
    padding: 2,
  },
  step: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  fillerSlot: {
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
  },
});

export default RoutineViewer;
