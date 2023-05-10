import { ERRORS } from '../src/enum/error.enum';
import { FORMULES } from '../src/enum/formule.enum';
import { Lefkowitz } from '../src/index';
import { lensMock } from './mock/lens.mock';

describe('Lefkowitz', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Amscope 4x 0.17 - sensor aps-c - extension 160mm', () => {
    const lens = lensMock;
    lens.overlap = 10;
    const result = Lefkowitz(lens, FORMULES.LEFKOWITZ_FINITO);
    expect(result?.realMagnification).toEqual(4);
    expect(result?.depthOfFieldMicron).toEqual(34);
  });
  it('Amscope 4x 0.17 - sensor aps-c - extension 160mm overlap 1', () => {
    let lens = lensMock;
    lens.overlap = 30;
    let result = Lefkowitz(lens, FORMULES.LEFKOWITZ_FINITO);
    expect(result?.realMagnification).toEqual(4);
    expect(result?.depthOfFieldMicron).toEqual(26);
  });
  let lens = lensMock;
  lens.overlap = 101;
  try {
    Lefkowitz(lens, FORMULES.LEFKOWITZ_FINITO);
  } catch (error) {
    expect(error).toHaveProperty('message', ERRORS.CENTIMETER_TO_MICRON_ERROR);
  }

  it('should throw a specific type of error.', () => {
    let lens = lensMock;
    lens.overlap = -1;
    try {
      Lefkowitz(lens, FORMULES.LEFKOWITZ_FINITO);
    } catch (error) {
      expect(error).toHaveProperty(
        'message',
        ERRORS.CENTIMETER_TO_MICRON_ERROR
      );
    }
  });
});
