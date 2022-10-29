 
import { coc } from '../src/helper/formule.enum';
import { Lefkowitz } from '../src/index';
 

describe('Lefkowitz', () => {
  it('Amscope 4x 0.17 - sensor aps-c - extension 160mm', () => {
    let lens = {
      aperture:0.17, 
      extension:160, 
      focalDistance:160, 
      lensMagnification:4,
      overlap:1,
      realMagnification:4,
      typeSensor:coc.apsc, 
      fEffective: 0, 
      depthOfFieldMicron: 0
    }  
    const result =  Lefkowitz(lens)
    console.log(result);
    expect(result.realMagnification).toEqual(4);
    expect(result.depthOfFieldMicron).toEqual(38);

  });
});
