import { CircleOfConfusion } from '../vo/enum/formule.enum';

export interface ResultFormuleLefkowitz {
  lensMagnification: number;
  aperture: number;
  fEffective: number;
  typeSensor: CircleOfConfusion;
  extension: number;
  focalDistance: number;
  realMagnification: number;
  overlap: number;
  depthOfFieldMicron: number;
  formula: string;
}
