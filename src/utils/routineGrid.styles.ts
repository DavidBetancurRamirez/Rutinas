import { StyleSheet } from 'react-native';

export interface GridStyles {
  slotSize?: number;
  slotGap?: number;
  imageSize?: number;
  textSize?: number;
}
export const createGridStyles = ({
  slotSize = 90,
  slotGap = 10,
  imageSize = 40,
  textSize = 12,
}: GridStyles) => {
  return StyleSheet.create({
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: slotGap,
    },
    slot: {
      width: slotSize,
      minHeight: slotSize,
      borderWidth: 2,
      borderColor: '#999',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: slotSize / 4,
      backgroundColor: '#f0f0f0',
      padding: 2,
    },
    option: {
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    fillerSlot: {
      backgroundColor: '#e0e0e0',
      borderColor: '#e0e0e0',
    },
    optionImage: {
      width: imageSize,
      height: imageSize,
      marginBottom: 4,
    },
    optionText: {
      fontSize: textSize,
      textAlign: 'center',
    },
  });
};
