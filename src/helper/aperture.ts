import { ParamsCalculateAperture } from '../interface/aperture.interface';

/***

Este código define una función llamada apertureEffectiveObjectiveMicroscope 
que toma dos parámetros (apertura y magnificación real) y devuelve un número. 
Esta función calcula el objetivo efectivo de un microscopio usando 
la fórmula fe / (realMagnification + 1). 
La función también redondea el resultado a un decimal.

*/

export let apertureEffectiveObjectiveMicroscope = ({
  aperture,
  realMagnification,
}: ParamsCalculateAperture): number => {
  let fe = feCalculate({ aperture, realMagnification });
  const fEffective = fe / (realMagnification + 1);
  return Number(fEffective.toFixed(1));
};

/**
 
Esta función exportada se encarga de calcular el factor de enfoque (fe) a partir de 
los parámetros de apertura y magnificación real. 
Primero, calcula el factor de enfoque como la división entre la magnificación real y el doble del valor de apertura. 
Luego, comprueba si el resultado es un número válido (no es NaN) y si es mayor o igual que cero. 
Si ambas condiciones se cumplen, devuelve el resultado con dos decimales redondeados. En caso contrario, devuelve cero.

*/

export let feCalculate = ({
  aperture,
  realMagnification,
}: ParamsCalculateAperture): number => {
  const fe = realMagnification / (2 * aperture);
  if (isNaN(fe)) return 0;
  if (fe < 0) return 0;
  return Number(fe.toFixed(2));
};
