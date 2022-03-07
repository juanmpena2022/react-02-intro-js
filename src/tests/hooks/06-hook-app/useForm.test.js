import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../../hooks/06-hook-app/useForm";

describe("pruebas del hook useForm", () => {
  const initialName = "juan";
  const initialForm = {
    name: initialName,
    email: "jm@gmail.com",
  };

  test("debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useForm());
    const { formState, handleInputChange, reset } = result.current;
    expect(formState).toEqual({});
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe retornar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState } = result.current;
    expect(formState).toEqual(initialForm);
  });

  test("debe cambiar el valor del formulario (cambiar name)", () => {
    const nuevoName = "Guelfo";
    const event = {
      target: {
        name: "name",
        value: nuevoName,
      },
    };

    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;
    act(() => {
      handleInputChange(event);
    });
    const { formState } = result.current;
    expect(formState.name).toBe(nuevoName);
  });

  test("debe re-estrablecer el valor del formulario (RESET)", () => {
    const nuevoName = "Guelfo";
    const event = {
      target: {
        name: "name",
        value: nuevoName,
      },
    };

    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, reset } = result.current;
    act(() => {
      handleInputChange(event);
      reset();
    });
    const { formState } = result.current;
    expect(formState.name).toBe(initialName);
  });
});
