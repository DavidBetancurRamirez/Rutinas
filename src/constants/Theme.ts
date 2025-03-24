import { DefaultTheme } from '@react-navigation/native';

export const Colors = {
  background: '#f2f2f2',
  blue: '#1982C4',
  green: '#8AC926',
  orange: '#F17105',
  violet: '#6A4C93',
  yellow: '#FFCA3A',
};

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

export type ThemeType = typeof Theme;
