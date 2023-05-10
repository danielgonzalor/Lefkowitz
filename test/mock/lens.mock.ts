import { CIRCULO_OF_CONFUSION } from '../../src/enum/circle-of-confusion';
import { FormuleLefkowitz } from '../../src/interface/formule-lefkowitz-input.interface';

export const lensMock: FormuleLefkowitz = {
  aperture: 0.17,
  extension: 160,
  focalDistance: 160,
  lensMagnification: 4,
  overlap: 10,
  CircleOfConfusion: CIRCULO_OF_CONFUSION.APS_C,
};
