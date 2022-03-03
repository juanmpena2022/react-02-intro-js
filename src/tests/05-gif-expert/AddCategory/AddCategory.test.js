import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../../05-gif-expert/components/AddCategory/AddCategory";

describe("pruebas del componente <AddCategory/>", () => {
  const setCategorias = jest.fn();
  let wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
  });

  test("snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("input de texto de cambiar", () => {
    const input = wrapper.find("input");
    const valor = "Hola Mundo";
    input.simulate("change", { target: { name: "width", value: valor } });

    const p = wrapper.find("p");
    const input1 = wrapper.find("input");

    expect(p.text()).toBe(valor);
    expect(input1.prop('value')).toBe(valor);
  });

  test("no debe postear info en el submit", () => {
    const f = wrapper.find("form");
    f.simulate("submit", { preventDefault() {} });

    expect(setCategorias).not.toHaveBeenCalled();
  });

  test("debe llamar setCategorias", () => {
    const input = wrapper.find("input");
    const valor = "Hola Mundo";
    input.simulate("change", { target: { name: "width", value: valor } });

    const f = wrapper.find("form");
    f.simulate("submit", { preventDefault() {} });

    expect(setCategorias).toHaveBeenCalled();
    expect(setCategorias).toHaveBeenCalledTimes(1);
    expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
  });
});
