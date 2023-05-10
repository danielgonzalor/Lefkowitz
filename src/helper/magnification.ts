import { ParamsRealMagnification } from '../interface/real-magnification.interface';

export const RealMagnificationFinite = ({
  lensMagnification,
  extension,
  focalDistance,
}: ParamsRealMagnification): number => {
  const realMagnification = (extension * lensMagnification) / focalDistance;
  return Number(realMagnification.toFixed(1));
};
