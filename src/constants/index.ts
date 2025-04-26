export enum AGES {
  CHILD = 'child',
  TEEN = 'teen',
}

export enum GAMES {
  INTERACTIVE = 'interactive',
  QUIZ = 'quiz',
  SORT = 'sort',
}

export enum GENDERS {
  MALE = 'male',
  FEMALE = 'female',
}

export enum ROUTINES {
  SHOWER = 'shower',
  BATHROOM = 'bathroom',
  TEETH = 'teeth',
}

export interface AppStoreState {
  age: AGES | '';
  gender: GENDERS | '';
  routine: ROUTINES | '';
  clearState: () => void;
  setAge: (age: AGES) => void;
  setGender: (gender: GENDERS) => void;
  setRoutine: (routine: ROUTINES) => void;
}

export const appStoreInitialState: Pick<
  AppStoreState,
  'age' | 'gender' | 'routine'
> = {
  age: '',
  gender: '',
  routine: '',
};
