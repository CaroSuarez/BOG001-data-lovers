// estas funciones son de ejemplo

// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';


export const sortData = () => {
  let myArray = [];
  for (let prueba1 of data.pokemon){
    let firstObject = {
      num: prueba1.num, 
      name: prueba1.name,
      type: prueba1.type,
      img: prueba1.img
    };
    myArray.push(firstObject);
    }
  return myArray;
};

export const anotherExample = () => {
  return 'OMG';
};

