import * as charactersData from './characters.json' assert { type: 'json' };

const list = () => {
    return charactersData;
}



export const Characters = {
    list,
}