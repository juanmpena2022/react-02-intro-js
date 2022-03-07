import { shallow, mount } from "enzyme";
import { HomeScreen } from "../../../06-hook-app/components/09-useContext/HomeScreen";
import { UserContext } from "../../../06-hook-app/components/09-useContext/UserContext";

describe("pruebas del componente <HomeScreen />", () => {
  const user = {
    name: "Juan",
    email: "jm@gmail.com",
  };

  test("snapshot", () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user }}>
        <HomeScreen />
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
