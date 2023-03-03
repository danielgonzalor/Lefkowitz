import { CentimeterToMicron } from '../vo/enum/error.enum';

export const functions = 'CentimeterToMicron';
/**

recibe un número de centímetros como argumento y devuelve el número de micrones equivalentes.
Si el número de centímetros es menor que cero, la función lanzará un error.
La función utiliza Math.round para redondear el resultado a la cantidad más cercana de micrones.

*/
export let centimetersToMicron = (centimeters: number): number => {
  if (centimeters < 0) {
    throw Error(
      `[${CentimeterToMicron}] Error invalid centimeters, greater than number 0`
    );
  }
  const micron = Math.round(centimeters * 10000);

  if (isNaN(micron)) {
    throw Error(
      `[${CentimeterToMicron}] Error invalid centimeters, greater than number 0`
    );
  }

  return micron;
};
