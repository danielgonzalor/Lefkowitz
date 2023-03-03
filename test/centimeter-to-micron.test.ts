import { centimetersToMicron } from '../src/helper/centimeters-to-micron';

describe('Test centimeters to micron', () => {
  it('Should by 1 cm to micron', () => {
    const value = centimetersToMicron(1);
    expect(value).toEqual(10000);
  });

});
