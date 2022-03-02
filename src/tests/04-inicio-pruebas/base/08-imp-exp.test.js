import second from "@testing-library/jest-dom";
import heroes from "../../../02-intro-js/data/heroes";
import {
  getHeroeById,
  getHeroesByOwner,
} from "../../../04-inicio-pruebas/base/08-imp-exp";

describe("pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe", () => {
    //1. Inicializacion
    const id = 3;
    const heroe = heroes.find((heroe) => heroe.id === id);

    //2. Estimulo
    const heroe1 = getHeroeById(id);

    //3. Observar el comportamiento
    expect(heroe).toEqual(heroe1);
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    //1. Inicializacion
    const id = 25;

    //2. Estimulo
    const heroe1 = getHeroeById(id);

    //3. Observar el comportamiento
    expect(heroe1).toBe(undefined);
  });

  test("getHeroesByOwner debe retornar un arreglo de DC", () => {
    //1. Inicializacion
    const owner = "DC";
    const heroe1 = heroes.filter((heroe) => heroe.owner === owner);

    //2. Estimulo
    const heroe2 = getHeroesByOwner(owner);

    //3. Observar el comportamiento
    expect(heroe1).toEqual(heroe2);
  });

  test("getHeroesByOwner debe retornar un arreglo de 2 elementos", () => {
    //2. Estimulo
    const heroe2 = getHeroesByOwner("Marvel");

    //3. Observar el comportamiento
    expect(heroe2.length).toBe(2);
  });
});
