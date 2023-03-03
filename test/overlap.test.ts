import { Overlap } from '../src/vo/overlap.vo';

describe('Overlap', () => {
  it('Overlap correct data', () => {
    const result = new Overlap(1);
    expect(result.value).toEqual(1);
  });
  it('Overlap error data', () => {
    try {
      const result = new Overlap(101);
      expect(result.value).toEqual(101);
    } catch (error) {
      expect(error.message).toEqual(
        'This number is invalid, value min 0 and value max 100'
      );
    }
  });
});
