import { useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import { GifGrid } from "../GifGrid/GifGrid";

export const GifExpertApp = ({ defaultCategorias = ["One Punch"] }) => {
  const [categorias, setCategorias] = useState(defaultCategorias);

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
