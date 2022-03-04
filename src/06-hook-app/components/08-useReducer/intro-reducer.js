//1. Estado inicial
const initialState = [
  {
    id: 1,
    todo: "Comprar Pan",
    done: false,
  },
];

//2. Funcion Reducer
const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }
  return state;
};

//3. Obtener state por defecto
let todos = todoReducer();

//4. Nuevo valor a adicionar
const newTodo = {
  id: 2,
  todo: "Comprar Leche",
  done: false,
};

//5. Accion que representa adicionar
const actionAdd = {
  type: "add",
  payload: newTodo,
};

//6. Obtener state con accionde adicionar
todos = todoReducer(todos, actionAdd);

console.log(todos);
