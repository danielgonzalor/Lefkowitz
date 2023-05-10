import { ERRORS } from '../src/enum/error.enum';
import { Overlap } from '../src/vo/overlap.vo';

describe('Overlap', () => {
  it('Overlap correct data', () => {
    const result = new Overlap(1);
    expect(result.value).toEqual(1);
  });
  it('Overlap error data', () => {
    try {
      new Overlap(101);
    } catch (error) {
      expect(error).toHaveProperty(
        'message',
        ERRORS.CENTIMETER_TO_MICRON_ERROR
      );
    }
  });
});
