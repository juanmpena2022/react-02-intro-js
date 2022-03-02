import { shallow } from "enzyme";
import CounterApp from "../../../../03-counter/components/CounterApp/CounterApp";

describe("pruebas del componente <CounterApp />", () => {
  //Aqui se pueden declarar variables para todos los test

  beforeEach(() => {
    //Este codigo se ejecuta antes de cada test
  });

  test("snapshot", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp />);
    const value = wrapper.find("h2").text();

    expect(value).toBe("10");
  });

  test("debe incrementar contador", () => {
    const valor = 15;

    const wrapper = shallow(<CounterApp value={valor} />);
    const btnIncrementar = wrapper.find("button").at(0);
    btnIncrementar.simulate("click");
    const value = wrapper.find("h2").text();

    expect(value).toBe((valor + 1).toString());
  });

  test("debe decrementar contador", () => {
    const valor = 20;

    const wrapper = shallow(<CounterApp value={valor} />);
    const btnIncrementar = wrapper.find("button").at(2);
    btnIncrementar.simulate("click");
    const value = wrapper.find("h2").text();

    expect(value).toBe((valor - 1).toString());
  });
});
