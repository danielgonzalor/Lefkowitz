import { ParamsCalculateDof } from '../interface/dof.interface';
import { Overlap } from '../vo/overlap.vo';

/***
 * 
Esta función calcula el valor del diámetro de campo (DOF) para un sensor dado. Recibe como parámetros el tipo de sensor, 
la magnificación real, la distancia focal efectiva y el porcentaje de superposición. 

Primero, se crea una instancia de la clase Overlap con el porcentaje de superposición recibido como parámetro.
Luego, se calcula y devuelve el valor del diámetro de campo con la siguiente fórmula: 
  2 * typeSensor * fEffective * ((realMagnification + 1) / (realMagnification * realMagnification)) * (overlapVo / 100).

 */
export const calculateDofCm = ({
  typeSensor,
  realMagnification,
  fEffective,
  overlap,
}: ParamsCalculateDof): number => {
  let overlapVo = new Overlap(overlap).value;
  let result =
    (2 *
      typeSensor *
      fEffective *
      ((realMagnification + 1) / (realMagnification * realMagnification))) /
    10;
  return result - (result / 100) * overlapVo;
};
