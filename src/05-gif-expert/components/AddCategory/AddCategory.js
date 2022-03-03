import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ setCategorias }) => {
  const [value, setValue] = useState("");

  //#region Funciones
  const iptChange = (evt) => {
    setValue(evt.target.value);
  };
  const submit = (evt) => {
    evt.preventDefault();
    
    let adicionado = false;    
    if (value.trim().length > 2) {
      setCategorias((cats) => {
        let result = [...cats];
        if (!cats.includes(value)) {
          adicionado = true;
          result.unshift(value);
        }

        return result;
      });

      if (adicionado) {
        setValue("");
      }
    }
  };
  //#endregion

  return (
    <form onSubmit={submit}>
      <input type="text" value={value} onChange={iptChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
