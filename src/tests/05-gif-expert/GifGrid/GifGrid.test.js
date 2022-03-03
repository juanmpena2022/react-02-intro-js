import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGrid } from "../../../05-gif-expert/components/GifGrid/GifGrid";
import { useFetchGifs } from "../../../hooks/05-gif-expert/useFetchGifs";
jest.mock("../../../hooks/05-gif-expert/useFetchGifs");

describe("pruebas del componente <GifGrid />", () => {
  const category = "One Punch";

  test("snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imagenes", () => {
    const gifs = [
      {
        id: 1,
        url: "url",
        title: "title",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    const gifGridItem = wrapper.find('GifGridItem');
    const p = wrapper.find('p');

    expect(gifGridItem.exists()).toBe(true);
    expect(gifGridItem.length).toBe(gifs.length);
    expect(p.exists()).toBe(false);
  });
});
