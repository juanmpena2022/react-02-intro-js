import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../06-hook-app/components/03-useFetch/MultipleCustomHooks";
import { useFetch } from "../../../hooks/06-hook-app/useFetch";
import { useCounter } from "../../../hooks/06-hook-app/useCounter";
jest.mock("../../../hooks/06-hook-app/useFetch.js");
jest.mock("../../../hooks/06-hook-app/useCounter.js");

describe("pruebas del componente <MultipleCustomHooks />", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
    });
  });

  test("snapshot", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("snapshot debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "juan",
          quote: "Hola Mundo!!!",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "juan",
          quote: "Hola Mundo!!!",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text()).toBe("Hola Mundo!!!");
  });
});
