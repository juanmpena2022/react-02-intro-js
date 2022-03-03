import { getGifs } from "../../../helpers/05-gif-expert/getGifs";

describe("pruebas de helper getGifs", () => {
  test("debe retornar 10 elementos", async () => {
    const data = await getGifs('messi');
    expect(data.length).toBe(10);
  });
});
