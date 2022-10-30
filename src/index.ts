import { apertureEffectiveObjectiveMicroscope } from './helper/aperture';
import { centimetersToMicron } from './helper/centimeters-to-micron';

import { calculateDofCm } from './helper/dof';
import { Formules } from './helper/formule.enum';
export { CircleOfConfusion } from './helper/formule.enum';


import { calculateRealMagnificationFinite } from './helper/magnification';
import {
  FormuleLefkowitz,
  ResultFormuleLefkowitz,
} from './interface/formule-lefkowitz.interface';
/**
 *
 * @param lensMagnification - magnification lens 1x,2x,4x etc
 * @param aperture - description of lens
 * @param typeSensor - camera information
 * @param extension - distance between lens to camera sensor
 * @param focalDistance - description of lens
 * @param overlap  - overlap between pictures 0 to 100%
 * @returns ResultFormuleLefkowitz
 */

export const Lefkowitz = ({
  lensMagnification,
  aperture,
  typeSensor,
  extension,
  focalDistance,
  overlap,
}: FormuleLefkowitz): ResultFormuleLefkowitz => {
  let fEffective, depthOfFieldCentimeters;

  let realMagnification = calculateRealMagnificationFinite({
    lensMagnification,
    extension,
    focalDistance,
  });
  fEffective = apertureEffectiveObjectiveMicroscope({
    aperture,
    realMagnification,
  });
  depthOfFieldCentimeters = calculateDofCm({
    typeSensor,
    realMagnification,
    overlap,
    fEffective,
  });
  const depthOfFieldMicron = centimetersToMicron(depthOfFieldCentimeters);
  const formula = Formules.Lefkowitz;

  let lens: ResultFormuleLefkowitz = {
    lensMagnification,
    aperture,
    typeSensor,
    extension,
    focalDistance,
    overlap,
    formula,
    depthOfFieldMicron,
    realMagnification,
    fEffective,
  };

  return lens;
};
