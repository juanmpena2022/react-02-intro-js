import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../../hooks/06-hook-app/useFetch";

describe("pruebas del hook useFetch", () => {
  const url = `https://www.breakingbadapi.com/api/quotes/1`;

  test("debe retornar la info por defecto", () => {
    const { result } = renderHook(() => useFetch(url));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
});
