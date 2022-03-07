import { shallow, mount } from "enzyme";
import { LoginScreen } from "../../../06-hook-app/components/09-useContext/LoginScreen";
import { UserContext } from "../../../06-hook-app/components/09-useContext/UserContext";

describe("pruebas del componente <LoginScreen />", () => {
  const user = {
    name: "Juan",
    email: "jm@gmail.com",
  };
  const setUser = jest.fn();

  test("snapshot", () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user }}>
        <LoginScreen />
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe ejecutar el setUser con el argumento esperado", () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user, setUser }}>
        <LoginScreen />
      </UserContext.Provider>
    );
    wrapper.find('LoginScreen button').simulate('click');
    expect(setUser).toHaveBeenCalledTimes(1);

    const loginUser = wrapper.find('LoginScreen button').prop('onClick');
    loginUser();
    expect(setUser).toHaveBeenCalledTimes(2);

    expect(setUser).toHaveBeenCalledWith({
        id: 1,
        name: "Juan",
        email: "jm@gmail.com",
      });
  });
});