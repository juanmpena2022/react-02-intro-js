import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../../../../03-counter/components/PrimeraApp/PrimeraApp";

describe("pruebas del componente <PrimeraApp />", () => {
  const useJEST = false;
  const useENZYME = true;

  test("JEST: debe mostrar el titulo (Hola, soy Goku)", () => {
    if (useJEST) {
      const titulo = "Hola, soy Goku";

      const { getByText } = render(<PrimeraApp titulo={titulo} />);
      expect(getByText(titulo)).toBeInTheDocument();
    }
  });

  test("ENZYME: debe mostrar el titulo (Hola, soy Goku)", () => {
    if (useENZYME) {
      const titulo = "Hola, soy Goku";
      const wrapper = shallow(<PrimeraApp titulo={titulo} />);

      expect(wrapper).toMatchSnapshot();
    }
  });

  test("ENZYME: debe mostrar el subtitulo", () => {
    if (useENZYME) {
      const titulo = "Hola, soy Goku";
      const subtitulo = "Soy otro subtitulo";

      const wrapper = shallow(
        <PrimeraApp titulo={titulo} subtitulo={subtitulo} />
      );
      const txtParrafo = wrapper.find("p").text();

      expect(txtParrafo).toBe(subtitulo);
    }
  });
});
