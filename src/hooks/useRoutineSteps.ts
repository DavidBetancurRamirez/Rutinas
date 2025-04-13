import { useMemo } from 'react';

import { AGES, AppStoreState, GENDERS, ROUTINES } from '@/constants';

import { routineStepsMap, StepKey } from '@/data/routineStepsData';

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
  const steps = useMemo(() => {
    const key = `${age}_${gender}_${routine}` as StepKey;
    return routineStepsMap[key] || [];
  }, [age, gender, routine]);

  return steps;
};
