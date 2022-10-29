import { ParamsCalculateDof } from '../interface/dof.interface';
/***
 * overlap 0 to 100%
 */
export const calculateDofCm = ({
  typeSensor,
  realMagnification,
  fEffective,
  overlap,
}: ParamsCalculateDof): number => {
  return (
    2 *
    typeSensor *
    fEffective *
    ((realMagnification + 1) / (realMagnification * realMagnification)) *
    (overlap / 100)
  );
};
