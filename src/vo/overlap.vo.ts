import { CONTEXT_ERROR } from '../enum/context.enum';
import { ERRORS } from '../enum/error.enum';
import { LefkowitzError } from '../exception/lefkowitzError-error';

enum overlapConfig {
  min = 0,
  max = 100,
}

export class Overlap {
  constructor(private _value: number = 0) {
    this.betweenValid();
  }

  get value() {
    return this._value;
  }

  private betweenValid(): boolean {
    const min = overlapConfig.min ?? Number.MIN_VALUE;
    const max = overlapConfig.max ?? Number.MAX_VALUE;

    if (this.value < min) {
      const context = `The ${CONTEXT_ERROR.OVERLAP} ${this._value}% must be greater than ${min}`;
      throw new LefkowitzError(ERRORS.CENTIMETER_TO_MICRON_ERROR, context);
    }
    if (this.value > max) {
      const context = `The ${CONTEXT_ERROR.OVERLAP} ${this._value}% must be less than ${max}`;
      throw new LefkowitzError(ERRORS.CENTIMETER_TO_MICRON_ERROR, context);
    }

    return true;
  }
}
