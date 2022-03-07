import { shallow } from "enzyme";
import { HookApp } from "../../../06-hook-app/components/HookApp/HookApp";

describe("pruebas del componente <HookApp />", () => {
  const wrapper = shallow(<HookApp />);

  test("snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
