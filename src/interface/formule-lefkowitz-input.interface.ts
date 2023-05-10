import { CIRCULO_OF_CONFUSION } from '../enum/circle-of-confusion';

export interface FormuleLefkowitz {
  lensMagnification: number;
  aperture: number;
  CircleOfConfusion: CIRCULO_OF_CONFUSION;
  extension: number;
  focalDistance: number;
  overlap: number;
}
