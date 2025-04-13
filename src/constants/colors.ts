import { ROUTINES } from '.';

export const Colors = {
  background: '#f2f2f2',
  blue: '#1982C4',
  green: '#8AC926',
  orange: '#F17105',
  violet: '#6A4C93',
  yellow: '#FFCA3A',
  success: '#4CAF50',
  error: '#F44336',
};

export const RoutineColors = {
  [ROUTINES.BATHROOM]: Colors.green,
  [ROUTINES.SHOWER]: Colors.yellow,
  [ROUTINES.TEETH]: Colors.orange,
};
