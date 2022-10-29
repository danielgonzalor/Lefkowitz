export let centimetersToMicron = (centimeters:number): number=> {
    const micron =   Math.round(Number((centimeters * 1000).toFixed(3))) 
    return micron
}
