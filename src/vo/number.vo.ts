import { Values } from '../interface/number.interface';

export class NumberVo {
  private _value: number = 0;
  constructor(private data: Values) {
    this.value = this.data.value;
    if (data.between) {
      this.betweenValid();
    }
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  private betweenValid(): boolean {
    const min = this.data?.between?.min || 0;
    const max = this.data?.between?.max || 0;

    if (this.value < min || this.value > max) {
      throw new Error(
        `This number is invalid, value min ${min} and value max ${max}`
      );
    }
    return true;
  }
}
