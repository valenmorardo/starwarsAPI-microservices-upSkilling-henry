import { CustomError } from '../utils/customError.js';
import * as charactersData from './characters.json' assert { type: 'json' };

const list = async () => {
    return charactersData;
}

const create = () => {
    
}



export const Characters = {
    list,
  
}