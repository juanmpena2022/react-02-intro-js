import { shallow } from "enzyme";
import { GifGridItem } from "../../../05-gif-expert/components/GifGridItem/GifGridItem";

describe("pruebas del componente <GifGridItem />", () => {
  const url = "https://media0.giphy.com/media/yo3TC0yeHd53G/giphy.gif";
  const title = "saitama GIF";
  const classAnimate__fadeIn = 'animate__fadeIn';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un <p> con el title", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(title);
  });

  test("debe tener un <img> con alt y url", () => {
    const img = wrapper.find("img");

    expect(img.props().src).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener un <img> con alt y url", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    const hasAnimate__fadeIn = div.hasClass(classAnimate__fadeIn);

    expect(className.includes(classAnimate__fadeIn)).toBe(true);
    expect(hasAnimate__fadeIn).toBe(true);
  });
});
