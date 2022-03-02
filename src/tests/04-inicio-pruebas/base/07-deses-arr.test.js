import second from "@testing-library/jest-dom";
import { retornaArreglo } from "../../../04-inicio-pruebas/base/07-deses-arr";

describe("pruebas en 07-deses-arr", () => {
  test("retornaArreglo debe retornar un string y un number", () => {
    //1. Inicializacion
    const arr = ['ABC', 123];

    //2. Estimulo
    const arr1 = retornaArreglo();

    //3. Observar el comportamiento
    expect(arr).toEqual(arr1);
  });

  test("retornaArreglo desestructuracion", () => {
    //2. Estimulo
    const [letra, numero] = retornaArreglo();

    //3. Observar el comportamiento
    expect(typeof letra).toBe('string');
    expect(typeof numero).toBe('number');
  });
});
