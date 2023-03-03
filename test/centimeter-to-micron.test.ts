import { centimetersToMicron } from '../src/helper/centimeters-to-micron';

describe('Test centimeters to micron', () => {
  it('Should by 1 cm to micron', () => {
    const value = centimetersToMicron(1);
    expect(value).toEqual(10000);
  });

  it('Should by error -1 cm to micron', () => {
    try {
      centimetersToMicron(-1);
    } catch (error) {
      expect(error.message).toEqual(
        '[CENTIMETER-TO-MICRON] Error invalid centimeters, greater than number 0'
      );
    }
  });
});
