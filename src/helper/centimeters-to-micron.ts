import { Overlap } from '../vo/overlap.vo';

export let centimetersToMicron = (centimeters: number): number => {
  let overlapVo = new Overlap(centimeters).value;
  const micron = Math.round(overlapVo * 10000);
  return micron;
};
