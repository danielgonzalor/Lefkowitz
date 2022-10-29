import { ParamsCalculateAperture } from "../interface/aperture.interface";
/**
* # Calculate aperture effective 
* ####  NA = aperture lens  
* ####  M = real magnification lens
* 
* fe = M / (2*NA) 

* f = fe / (M+1)  
* 
* @param ParamsCalculateAperture  
*
* @returns apertureEffective
*/
export let apertureEffectiveObjectiveMicroscope = ({ aperture, realMagnification}: ParamsCalculateAperture):number => {
    let fe =  feCalc({aperture,realMagnification})  
    const fEffective = fe / (realMagnification+1) 
    return Number((fEffective).toFixed(1)); 
}

/**
 * # Calculate Nº f effective = M/(2*NA) 
 * @param aperture NA
 * @param realMagnification  M
 * 
 * @returns fEffective
 */
export let feCalc = ({ aperture, realMagnification }: ParamsCalculateAperture): number => { 
    const fe = realMagnification / (2 * aperture ) 
    if(isNaN(fe)) return 0
    if(fe < 0) return 0  
    return Number((fe).toFixed(2));          
}
