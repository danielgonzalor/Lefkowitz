import { ParamsDof } from '../interface/dof.interface';
import { Overlap } from '../vo/overlap.vo';

export const DofCm = ({
  CircleOfConfusion,
  realMagnification,
  fEffective,
  overlap,
}: ParamsDof): number => {
  let overlapVo = new Overlap(overlap).value;
  let result =
    (2 *
      CircleOfConfusion *
      fEffective *
      ((realMagnification + 1) / (realMagnification * realMagnification))) /
    10;
  return result - (result / 100) * overlapVo;
};
