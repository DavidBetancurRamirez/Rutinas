import React from 'react';
import { Text, Image, View } from 'react-native';

import { Step } from '@/data/routineStepsData';

import { createGridStyles } from '@/utils/routineGrid.styles';

interface RoutineOptionProps extends Omit<Step, 'id'> {
  imageSize?: number;
  textSize?: number;
}

const RoutineOption: React.FC<RoutineOptionProps> = ({
  image,
  imageSize,
  name,
  textSize,
}) => {
  const gridStyles = createGridStyles({ imageSize, textSize });

  return (
    <>
      <Image source={image} style={gridStyles.optionImage} />
      <Text style={gridStyles.optionText}>{name}</Text>
    </>
  );
};

export const FillEmptyOptions = (
  length: number,
  slotSize: number,
  slotGap: number,
) => {
  const gridStyles = createGridStyles({ slotSize, slotGap });

  return Array.from({ length }).map((_, index) => (
    <View
      key={`filler-${index}`}
      style={[gridStyles.slot, gridStyles.fillerSlot]}
    />
  ));
};

export default RoutineOption;
