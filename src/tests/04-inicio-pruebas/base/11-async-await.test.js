import { getImagen } from "../../../04-inicio-pruebas/base/11-async-await";

describe("pruebas en 11-async-await", () => {
  test("getImagen debe retornar la url de la imagen", async () => {
    const apiKey = "6v0gqpBHPElle3D4YENpQCAHsVi55yKA";
    const url = await getImagen(apiKey);

    expect(typeof url).toBe('string');
  });

  test("getImagen debe retornar un error", async () => {
    const apiKey = "6v0gqpBHPElle3D4YENpQCHsVi55yKA";
    const url = await getImagen(apiKey);

    expect(url).toBe('No existe');
  });
});