import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { TodoAdd } from "../../../06-hook-app/components/08-useReducer/TodoAdd";

describe("pruebas del componente <TodoAdd />", () => {
  const handleAddTodo = jest.fn();

  test("snapshot", () => {
    jest.clearAllMocks();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("no debe llamar handleAddTodo", () => {
    jest.clearAllMocks();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe llamar la funcion handleAddTodo", () => {
    jest.clearAllMocks();
    const value = "Aprender React";
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
    wrapper.find("input").simulate("change", {
      target: {
        value: value,
        name: "description",
      },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop('value')).toBe('');
  });
});
