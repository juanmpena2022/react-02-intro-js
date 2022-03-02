import second from "@testing-library/jest-dom";

import { getSaludo } from "../../../04-inicio-pruebas/base/02-template-string";

describe("pruebas en 02-template-string.js", () => {
  test("getSaludo con argumento", () => {
    //1. Inicializacion
    const name = "Juan";

    //2. Estimulo
    const saludo = getSaludo(name);

    //3. Observar el comportamiento
    expect(saludo).toBe(`Hola ${name}`);
  });

  test("getSaludo sin argumento", () => {
    //2. Estimulo
    const saludo = getSaludo();

    //3. Observar el comportamiento
    expect(saludo).toBe(`Hola Carlos`);
  });
});
