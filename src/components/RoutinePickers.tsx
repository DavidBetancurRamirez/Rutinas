import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker, PickerIOS } from '@react-native-picker/picker';

import { AGES, GENDERS, ROUTINES } from '@/constants';
import { routineName } from '@/constants/names';

type RoutinePickersProps = {
  age: AGES;
  setAge: (age: AGES) => void;
  gender: GENDERS;
  setGender: (gender: GENDERS) => void;
  routine: ROUTINES;
  setRoutine: (routine: ROUTINES) => void;
};

const RoutinePickers: React.FC<RoutinePickersProps> = ({
  age,
  setAge,
  gender,
  setGender,
  routine,
  setRoutine,
}) => {
  const PickerComponent = Platform.OS === 'ios' ? PickerIOS : Picker;

  return (
    <View style={styles.pickerContainer}>
      <PickerComponent
        style={styles.picker}
        selectedValue={age}
        onValueChange={(itemValue: AGES) => setAge(itemValue)}
      >
        <Picker.Item label="Edad" value={null} enabled={false} />
        <Picker.Item label="Niño/a" value={AGES.CHILD} />
        <Picker.Item label="Adolescente" value={AGES.TEEN} />
      </PickerComponent>

      <PickerComponent
        style={styles.picker}
        selectedValue={gender}
        onValueChange={(itemValue: GENDERS) => setGender(itemValue)}
      >
        <Picker.Item label="Género" value={null} enabled={false} />
        <Picker.Item label="Hombre" value={GENDERS.MALE} />
        <Picker.Item label="Mujer" value={GENDERS.FEMALE} />
      </PickerComponent>

      <PickerComponent
        style={styles.picker}
        selectedValue={routine}
        onValueChange={(itemValue: ROUTINES) => setRoutine(itemValue)}
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
      </PickerComponent>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default RoutinePickers;
