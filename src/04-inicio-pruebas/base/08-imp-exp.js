import heroes from '../../02-intro-js/data/heroes';

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );