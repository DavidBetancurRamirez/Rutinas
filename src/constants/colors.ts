import { ROUTINES } from '.';

export const Colors = {
  background: '#f2f2f2',
  blue: '#1982C4',
  error: '#F48C8C',
  green: '#8AC926',
  orange: '#F17105',
  red: '#D32F2F',
  success: '#4CAF50',
  violet: '#6A4C93',
  yellow: '#E6B232',
};

export const RoutineColors = {
  [ROUTINES.BATHROOM]: Colors.green,
  [ROUTINES.SHOWER]: Colors.yellow,
  [ROUTINES.TEETH]: Colors.orange,
};
