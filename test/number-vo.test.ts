import { Values } from '../src/interface/number.interface';
import { NumberVo } from '../src/vo/number.vo';
describe('Overlap', () => {
  it('Overlap correct data', () => {
    const data: Values = {
      value: 2,
      between: { min: 0, max: 100 },
    };
    const result = new NumberVo(data);
    expect(result.value).toEqual(2);
  });
  it('Overlap correct data', () => {
    const data: Values = {
      value: 0,
      between: { min: 0, max: 100 },
    };
    const result = new NumberVo(data);
    expect(result.value).toEqual(0);
  });
  it('Overlap incorrect data 1', () => {
    try {
      const data: Values = {
        value: -1,
        between: { min: 0, max: 100 },
      };
      const result = new NumberVo(data);
      expect(result.value).toEqual(2);
    } catch (error) {
      expect(error.message).toEqual(
        'This number is invalid, value min 0 and value max 100'
      );
    }
  });
  it('Overlap incorrect data 2', () => {
    try {
      const data: Values = {
        value: 101,
        between: { min: 0, max: 100 },
      };
      const result = new NumberVo(data);
      expect(result.value).toEqual(101);
    } catch (error) {
      expect(error.message).toEqual(
        'This number is invalid, value min 0 and value max 100'
      );
    }
  });
});
