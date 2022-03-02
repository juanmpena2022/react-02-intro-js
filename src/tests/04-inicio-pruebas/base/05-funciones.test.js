import second from "@testing-library/jest-dom";
import {
  getUser,
  getUsuarioActivo,
} from "../../../04-inicio-pruebas/base/05-funciones";

describe("pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    //1. Inicializacion
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    //2. Estimulo
    const user1 = getUser();

    //3. Observar el comportamiento
    expect(user).toEqual(user1);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    //1. Inicializacion
    const name = "Juan";
    const user = {
      uid: "ABC567",
      username: name,
    };

    //2. Estimulo
    const user1 = getUsuarioActivo(name);

    //3. Observar el comportamiento
    expect(user).toEqual(user1);
  });
});
