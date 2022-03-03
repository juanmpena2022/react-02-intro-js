import { useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import { GifGrid } from "../GifGrid/GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(['One Punch']);

  //#region Funciones
  
  //#endregion

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};
