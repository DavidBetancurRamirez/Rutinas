export const getFillerCount = (
  width: number,
  totalSlotSize: number,
  stepsCount: number,
) => {
  const itemsPerRow = Math.floor(width / totalSlotSize);
  const totalSlots = Math.ceil(stepsCount / itemsPerRow) * itemsPerRow;
  return totalSlots - stepsCount;
};
