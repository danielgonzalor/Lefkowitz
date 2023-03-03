import { ParamsCalculateRealMagnification } from '../interface/real-magnification.interface';

/**

Esta función calcula la magnificación real de un objeto en función de los parámetros especificados. 
Estos parámetros son:

- lensMagnification: la magnificación de la lente.
- extension: la extensión del objetivo.
- focalDistance: la distancia focal.

La función toma estos parámetros como argumentos y devuelve un número con un decimal que representa 
la magnificación real del objeto.

*/

export const calculateRealMagnificationFinite = ({
  lensMagnification,
  extension,
  focalDistance,
}: ParamsCalculateRealMagnification): number => {
  const realMagnification = (extension * lensMagnification) / focalDistance;
  return Number(realMagnification.toFixed(1));
};
