import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { TodoListItem } from "../../../06-hook-app/components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("pruebas del componente <TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  test("snapshot", () => {
    jest.clearAllMocks();
    const index = 0;
    const todo = demoTodos[index];
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar la funcion de borrar", () => {
    jest.clearAllMocks();
    const index = 0;
    const todo = demoTodos[index];
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    const btn = wrapper.find('button');
    btn.simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test("debe llamar la funcion toggle", () => {
    jest.clearAllMocks();
    const index = 0;
    const todo = demoTodos[index];
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    const p = wrapper.find('p');
    p.simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test("debe mostrar el valor correctamente", () => {
    const index = 0;
    const todo = demoTodos[index];
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    const p = wrapper.find('p');
    expect(p.text()).toBe(`${index + 1}. ${todo.desc}`);
  });
});
