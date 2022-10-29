import { coc } from '../helper/formule.enum';

export interface FormuleLefkowitz {
  lensMagnification: number;
  aperture: number;
  typeSensor: number;
  extension: number;
  focalDistance: number;
  overlap: number;
}

export interface ResultFormuleLefkowitz {
  lensMagnification: number;
  aperture: number;
  fEffective: number;
  typeSensor: coc;
  extension: number;
  focalDistance: number;
  realMagnification: number;
  overlap: number;
  depthOfFieldMicron: number;
  formula: string;
}
