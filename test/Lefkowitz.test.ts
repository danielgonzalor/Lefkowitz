import { Lefkowitz } from '../src/index';
import { lensMock } from './mock/lens.mock';

describe('Lefkowitz', () => {
  const messageError = 'This number is invalid, value min 0 and value max 100';
  it('Amscope 4x 0.17 - sensor aps-c - extension 160mm', () => {
    let lens = lensMock;
    let result = Lefkowitz(lens);
    expect(result.realMagnification).toEqual(4);
    expect(result.depthOfFieldMicron).toEqual(34);
  });
  it('Amscope 4x 0.17 - sensor aps-c - extension 160mm overlap 1', () => {
    let lens = lensMock;
    lens.overlap = 30;
    let result = Lefkowitz(lens);
    expect(result.realMagnification).toEqual(4);
    expect(result.depthOfFieldMicron).toEqual(26);
  });
  it('should throw a specific type of error.', () => {
    let lens = lensMock;
    lens.overlap = 101;
    try {
      Lefkowitz(lens);
    } catch (error) {
      expect(error).toHaveProperty('message', messageError);
    }
  });

  it('should throw a specific type of error.', () => {
    let lens = lensMock;
    lens.overlap = -1;
    try {
      Lefkowitz(lens);
    } catch (error) {
      expect(error).toHaveProperty('message', messageError);
    }
  });
});
