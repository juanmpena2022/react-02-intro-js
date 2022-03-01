import { getHeroeById } from "../data/heroes";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se encontro el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(11)
  .then((heroe) => console.log(heroe))
  .catch((err) => console.warn(err));
