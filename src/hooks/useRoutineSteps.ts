import { useMemo } from 'react';

import {
  AGES,
  appStoreInitialState,
  AppStoreState,
  GENDERS,
  ROUTINES,
} from '@/constants';

import { routineStepsMap, StepKey } from '@/data/routineStepsData';
import { useRouter } from 'expo-router';

export type Params = {
  age: AGES;
  gender: GENDERS;
  routine: ROUTINES;
};

export const useRoutineSteps = ({
  age,
  gender,
  routine,
}: Pick<AppStoreState, 'age' | 'gender' | 'routine'>) => {
  const router = useRouter();

  if (routine === appStoreInitialState.routine) {
    router.push('/routines');
  }
  if (
    age === appStoreInitialState.age ||
    gender === appStoreInitialState.gender
  ) {
    router.push('/options');
  }

  const steps = useMemo(() => {
    const key = `${age}_${gender}_${routine}` as StepKey;
    return routineStepsMap[key] || [];
  }, [age, gender, routine]);

  return steps;
};
