import { LefkowitzError } from '../exception/lefkowitzError-error';
import { ERRORS } from '../enum/error.enum';
import { CONTEXT_ERROR } from '../enum/context.enum';

enum apertureConfig {
  min = 0,
  max = 100,
}

export class Aperture {
  constructor(private _value: number = 0) {
    this.betweenValid();
  }

  get value() {
    return this._value;
  }

  private betweenValid(): boolean {
    const min = apertureConfig.min ?? Number.MIN_VALUE;
    const max = apertureConfig.max ?? Number.MAX_VALUE;

    if (this.value < min) {
      const context = `The ${CONTEXT_ERROR.APERTURE} ${this._value}% must be greater than ${min}`;
      throw new LefkowitzError(ERRORS.CENTIMETER_TO_MICRON_ERROR, context);
    }
    if (this.value > max) {
      const context = `The ${CONTEXT_ERROR.APERTURE} ${this._value}% must be less than ${max}`;
      throw new LefkowitzError(ERRORS.CENTIMETER_TO_MICRON_ERROR, context);
    }

    return true;
  }
}
