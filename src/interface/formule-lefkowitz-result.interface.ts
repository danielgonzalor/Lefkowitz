import { CIRCULO_OF_CONFUSION } from '../enum/circle-of-confusion';

export interface FormuleLefkowitzResult {
  lensMagnification: number;
  aperture: number;
  fEffective: number;
  CircleOfConfusion: CIRCULO_OF_CONFUSION;
  extension: number;
  focalDistance: number;
  realMagnification: number;
  overlap: number;
  depthOfFieldMicron: number;
  formula: string;
}
