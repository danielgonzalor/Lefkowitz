import { FORMULES } from './enum/formule.enum';
import { FormuleLefkowitz } from './interface/formule-lefkowitz-input.interface';
import { FormuleLefkowitzResult } from './interface/formule-lefkowitz-result.interface';
import { LefkowitzLensFinito } from './lefkowitz-lens-finito';

export const Lefkowitz = (
  configMacro: FormuleLefkowitz,
  formule: FORMULES
): FormuleLefkowitzResult | null => {
  if (FORMULES.LEFKOWITZ_FINITO === formule) {
    return LefkowitzLensFinito(configMacro);
  }
  return null;
};
