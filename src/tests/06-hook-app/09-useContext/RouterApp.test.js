import { shallow, mount } from "enzyme";
import { RouterApp } from "../../../06-hook-app/components/09-useContext/RouterApp";
import { UserContext } from "../../../06-hook-app/components/09-useContext/UserContext";

describe("pruebas del componente <RouterApp />", () => {
  const user = {
    name: "Juan",
    email: "jm@gmail.com",
  };
  const setUser = jest.fn();

  test("snapshot", () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user, setUser }}>
        <RouterApp />
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
