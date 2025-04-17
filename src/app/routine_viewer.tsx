import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, useWindowDimensions } from 'react-native';
import { View, StyleSheet } from 'react-native';

import RoutineOption, { FillEmptyOptions } from '@/components/RoutineOption';
import Screen, { genericMargin } from '@/components/Screen';

import { AGES, GENDERS, ROUTINES } from '@/constants';
import { routineName } from '@/constants/names';

import { useRoutineSteps } from '@/hooks/useRoutineSteps';

import useAppStore from '@/stores';

import { createGridStyles } from '@/utils/routineGrid.styles';
import { getFillerCount } from '@/utils/getFillerCount';

const SLOT_SIZE = 100;
const SLOT_GAP = 10;

const gridStyles = createGridStyles({ slotSize: SLOT_SIZE, slotGap: SLOT_GAP });

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
      <View style={{ flex: 1 }}>
        <View style={styles.pickerContainer}>
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
            <Picker.Item
              label={routineName[ROUTINES.SHOWER]}
              value={ROUTINES.SHOWER}
            />
            <Picker.Item
              label={routineName[ROUTINES.BATHROOM]}
              value={ROUTINES.BATHROOM}
            />
            <Picker.Item
              label={routineName[ROUTINES.TEETH]}
              value={ROUTINES.TEETH}
            />
          </Picker>
        </View>

        <ScrollView style={styles.scrollView}>
          {shouldShowRoutine && (
            <View style={gridStyles.grid}>
              {steps.map((step) => {
                return (
                  <View
                    key={step.id}
                    style={[gridStyles.slot, gridStyles.option]}
                  >
                    <RoutineOption
                      image={step.image}
                      imageSize={50}
                      name={step.name}
                    />
                  </View>
                );
              })}

              {FillEmptyOptions(fillerCount, SLOT_SIZE, SLOT_GAP)}
            </View>
          )}
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 10,
    gap: 10,
  },
  picker: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    minWidth: 150,
  },
});

export default RoutineViewer;
