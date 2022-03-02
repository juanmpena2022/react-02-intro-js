import second from "@testing-library/jest-dom";
import heroes from "../../../02-intro-js/data/heroes";
import { getHeroeByIdAsync } from "../../../04-inicio-pruebas/base/09-promesas";

describe("pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
    const id = 1;
    const heroe = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    getHeroeByIdAsync(id).then((h) => {
      expect(h).toEqual(heroe);
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un error si el heroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
