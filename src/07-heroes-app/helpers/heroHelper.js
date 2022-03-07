import { heroes } from "../data/heroes";

const validPublisher = ["DC Comics", "Marvel Comics"];

const getHeroById = (id) => {
  console.log("getHeroById called");
  return heroes.find((h) => h.id === id);
};

const getHeroesByPublisher = (publisher) => {
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} no es valido`);
  }

  return heroes.filter((h) => h.publisher === publisher);
};

const getHeroesByName = (name = "") => {
  console.log("getHeroesByName called");
  
  if (name === "") {
    return [];
  }

  return heroes.filter((h) =>
    h.superhero.toLowerCase().includes(name.toLowerCase())
  );
};

export { getHeroById, getHeroesByPublisher, getHeroesByName };
