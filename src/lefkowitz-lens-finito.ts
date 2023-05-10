import { FORMULES } from "./enum/formule.enum";
import { apertureEffectiveObjectiveMicroscopeResult } from "./helper/aperture";
import { centimetersToMicron } from "./helper/centimeters-to-micron";
import { DofCm } from "./helper/dof";
import { RealMagnificationFinite } from "./helper/magnification";
import { FormuleLefkowitz } from "./interface/formule-lefkowitz-input.interface";
import { FormuleLefkowitzResult } from "./interface/formule-lefkowitz-result.interface";

export const LefkowitzLensFinito = (({lensMagnification, extension, focalDistance, aperture, CircleOfConfusion, overlap }: FormuleLefkowitz)=>{
    const realMagnification = RealMagnificationFinite({
        lensMagnification,
        extension,
        focalDistance,
      });
      const fEffective = apertureEffectiveObjectiveMicroscopeResult({
        aperture,
        realMagnification,
      });
      const depthOfFieldCentimeters = DofCm({
        CircleOfConfusion,
        realMagnification,
        overlap,
        fEffective,
      });
      const depthOfFieldMicron = centimetersToMicron(depthOfFieldCentimeters);
      const formula = FORMULES.LEFKOWITZ_INFINITO;
    
      const lens: FormuleLefkowitzResult = {
        lensMagnification,
        aperture,
        CircleOfConfusion,
        extension,
        focalDistance,
        overlap,
        formula,
        depthOfFieldMicron,
        realMagnification,
        fEffective,
      };
    return lens
})
