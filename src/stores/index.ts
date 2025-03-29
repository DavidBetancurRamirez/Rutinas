import { create } from 'zustand';

import { appStoreInitialState, AppStoreState } from '@/constants';

const useAppStore = create<AppStoreState>((set) => ({
  ...appStoreInitialState,
  clearState: () => set(appStoreInitialState),
  setAge: (age) => set({ age }),
  setGender: (gender) => set({ gender }),
  setRoutine: (routine) => set({ routine }),
}));

export default useAppStore;
