import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoList } from "../../../06-hook-app/components/08-useReducer/TodoList";

describe("pruebas del componente <TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  test("snapshot", () => {
    jest.clearAllMocks();
    const wrapper = shallow(
      <TodoList
        todos={demoTodos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener n <TodoListItem />", () => {
    jest.clearAllMocks();
    const wrapper = shallow(
      <TodoList
        todos={demoTodos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    const items = wrapper.find("TodoListItem");
    expect(items.length).toBe(demoTodos.length);
    expect(items.at(0).prop("handleDelete")).toEqual(expect.any(Function));
  });
});
