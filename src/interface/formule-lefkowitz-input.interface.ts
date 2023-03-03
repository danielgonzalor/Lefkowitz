import { CircleOfConfusion } from '../vo/enum/formule.enum';

export interface FormuleLefkowitz {
  lensMagnification: number;
  aperture: number;
  typeSensor: CircleOfConfusion;
  extension: number;
  focalDistance: number;
  overlap: number;
}
