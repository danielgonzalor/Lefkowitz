import { Values } from '../interface/number.interface';
import { overlapConfig } from './enum/overlap.enum';
import { NumberVo } from './number.vo';

/**
 
Esta clase representa una clase Overlap, la cual contiene un atributo privado _value de tipo number inicializado en 0. 
Tiene un constructor que recibe como parámetro overlap de tipo number, el cual se asigna al atributo _value mediante el 
setter value. El setter value recibe como parámetro value de tipo number y 
valida que este se encuentre entre los valores mínimo y máximo definidos en overlapConfig.
Si es así, el valor es asignado al atributo _value.
Finalmente, tiene un getter value que devuelve el valor del atributo _value.

*/
export class Overlap {
  private _value: number = 0;
  constructor(overlap: number) {
    this.value = overlap;
  }
  get value() {
    return this._value;
  }
  set value(value: number) {
    const data: Values = {
      value,
      between: { min: overlapConfig.min, max: overlapConfig.max },
    };
    const result = new NumberVo(data);
    this._value = result.value;
  }
}
