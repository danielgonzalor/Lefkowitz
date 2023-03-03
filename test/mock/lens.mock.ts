import { CircleOfConfusion } from '../../src';
import { FormuleLefkowitz } from '../../src/interface/formule-lefkowitz-input.interface';

export const lensMock: FormuleLefkowitz = {
  aperture: 0.17,
  extension: 160,
  focalDistance: 160,
  lensMagnification: 4,
  overlap: 10,
  typeSensor: CircleOfConfusion.apsc,
};
