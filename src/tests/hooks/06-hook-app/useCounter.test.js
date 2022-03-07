import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../../hooks/06-hook-app/useCounter";

describe("pruebas del hook useCounter", () => {
  test("debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { value, increment, decrement, reset } = result.current;
    expect(value).toBe(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("debe incrementar el valor", () => {
    const valor = 25;
    const { result } = renderHook(() => useCounter(valor));
    const { increment, decrement, reset } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.value).toBe(valor + 1);
  });
  test("debe decrementar el valor", () => {
    const valor = 25;
    const { result } = renderHook(() => useCounter(valor));
    const { increment, decrement, reset } = result.current;
    act(() => {
      decrement();
    });
    expect(result.current.value).toBe(valor - 1);
  });
  test("debe retornar los valores por defecto luego de incrementar y reset", () => {
    const valor = 25;
    const { result } = renderHook(() => useCounter(valor));
    const { increment, decrement, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    expect(result.current.value).toBe(valor);
  });
});
