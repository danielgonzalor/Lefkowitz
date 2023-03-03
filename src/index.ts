import { apertureEffectiveObjectiveMicroscope } from './helper/aperture';
import { centimetersToMicron } from './helper/centimeters-to-micron';

import { calculateDofCm } from './helper/dof';
import { Formules } from './vo/enum/formule.enum';

import { calculateRealMagnificationFinite } from './helper/magnification';

import { FormuleLefkowitz } from './interface/formule-lefkowitz-input.interface';
import { ResultFormuleLefkowitz } from './interface/formule-lefkowitz-result.interface';

export { CircleOfConfusion } from './vo/enum/formule.enum';
/**

El siguiente es una función que calcula el campo de profundidad de un lente de microscopio usando la fórmula de Lefkowitz. 
Esta función recibe como parámetros los siguientes valores: lensMagnification, aperture, typeSensor, extension, focalDistance y overlap.
Estos parámetros se usan para calcular la magnificación real del objetivo finito (realMagnification), 
el diámetro efectivo del objetivo del microscopio (fEffective) y el campo de profundidad en centímetros (depthOfFieldCentimeters).
Finalmente, se convierte depthOfFieldCentimeters a micrones (depthOfFieldMicron) y se devuelve un objeto con los valores calculados
junto con los parámetros iniciales.

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
