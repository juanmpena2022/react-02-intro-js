const persona = {
    name: 'Juan'
};
console.log(persona);

//Referencia
const persona1 = persona;
persona1.name = 'Peter';
console.log(persona);

//Clonacion de las propiedades
const persona2 = {...persona};
persona2.name = 'Albe';
console.log(persona);