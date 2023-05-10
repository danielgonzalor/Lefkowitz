import { ParamsAperture } from '../interface/aperture.interface';

export let apertureEffectiveObjectiveMicroscopeResult = ({
  aperture,
  realMagnification,
}: ParamsAperture): number => {
  let feResult = fe({ aperture, realMagnification });
  const fEffective = feResult / (realMagnification + 1);
  return Number(fEffective.toFixed(1));
};

export let fe = ({ aperture, realMagnification }: ParamsAperture): number => {
  const fe = realMagnification / (2 * aperture);
  if (isNaN(fe)) return 0;
  if (fe < 0) return 0;
  return Number(fe.toFixed(2));
};
