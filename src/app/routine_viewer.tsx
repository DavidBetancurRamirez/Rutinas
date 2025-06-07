import React, { useState } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { View, StyleSheet } from 'react-native';

import RoutineOption, { FillEmptyOptions } from '@/components/RoutineOption';
import RoutinePickers from '@/components/RoutinePickers';
import Screen, { genericMargin } from '@/components/Screen';

import { AGES, GENDERS, ROUTINES } from '@/constants';

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
        <RoutinePickers
          age={age}
          setAge={setAge}
          gender={gender}
          setGender={setGender}
          routine={routine}
          setRoutine={setRoutine}
        />

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
});

export default RoutineViewer;
