import * as planetsData from './planets.json' assert { type: 'json' };

const list = () => {
    return planetsData;
}



export const Planets = {
    list,
}