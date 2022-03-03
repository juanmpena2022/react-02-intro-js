import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../../../05-gif-expert/components/GifExpertApp/GifExpertApp";

describe("pruebas del componente <GifExpertApp />", () => {
  test("snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias", () => {
    const categorias = ["Dragon", "One Punch"];
    const wrapper = shallow(<GifExpertApp defaultCategorias={categorias} />);
    const gifGrids = wrapper.find('GifGrid');

    expect(gifGrids.length).toBe(categorias.length);
  });
});
