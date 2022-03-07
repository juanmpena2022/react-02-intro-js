import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../06-hook-app/components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("pruebas del componente <TodoApp />", () => {
  Storage.prototype.setItem = jest.fn();

  test("snapshot", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      const handleAddTodo = wrapper.find("TodoAdd").prop("handleAddTodo");
      handleAddTodo(demoTodos[0]);
      handleAddTodo(demoTodos[1]);
    });

    const h1 = wrapper.find("h1");
    expect(h1.text().trim()).toBe("TodoApp: (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("debe eliminar un TODO", () => {
    const wrapper = shallow(<TodoApp />);
    const handleAddTodo = wrapper.find("TodoAdd").prop("handleAddTodo");
    const handleDelete = wrapper.find("TodoList").prop("handleDelete");
    handleAddTodo(demoTodos[0]);
    handleDelete(demoTodos[0].id);
    const h1 = wrapper.find("h1");

    expect(h1.text().trim()).toBe("TodoApp: (0)");
  });
});
