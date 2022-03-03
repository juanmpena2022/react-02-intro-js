import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../../hooks/05-gif-expert/useFetchGifs";

describe("pruebas del hook useFetchGifs", () => {
  const category = "One Punch";

  test("debe retornar el estado actual", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));    
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("debe retornar un arreglo de imagenes", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
