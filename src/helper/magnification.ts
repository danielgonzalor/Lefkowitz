import { ParamsCalculateRealMagnification } from "../interface/real-magnification.interface";
/**
 * # Calculate extension witch  require according to the magnification
 * extension  = MagnificationRequire / lensMagnification * focalDistance 
 * @param lensMagnification 
 * @param extension 
 * @param focalDistance   
 * @returns realMagnification
 */
export const calculateRealMagnificationFinite = ({ lensMagnification, extension, focalDistance }: ParamsCalculateRealMagnification): number => {
    const realMagnification = extension * lensMagnification / focalDistance;
    return Number(realMagnification.toFixed(1));
}
