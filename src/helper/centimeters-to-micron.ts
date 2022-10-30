export let centimetersToMicron = (centimeters: number): number => {
  const micron = Math.round(centimeters * 10000);
  return micron;
};
