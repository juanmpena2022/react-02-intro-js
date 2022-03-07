import { shallow } from "enzyme";
import { RefExample } from "../../../06-hook-app/components/04-useRef/RefExample";


describe("pruebas del componente <RefExample />", () => {
  test("snapshot", () => {
    const wrapper = shallow(<RefExample />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("debe mostrarse el componente MultipleCustomHooks luego del handle", () => {
    const wrapper = shallow(<RefExample />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
