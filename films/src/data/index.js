import * as filmsData from './films.json' assert { type: 'json' };

const list = () => {
    return filmsData;
}



export const Films = {
    list,
}