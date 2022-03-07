import React, { useMemo } from "react";
import { useForm } from "../../../hooks/06-hook-app/useForm";
import { getHeroesByName } from "../../helpers/heroHelper";
import { HeroCard } from "../hero/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { formState, handleInputChange, reset } = useForm({
    search: q,
  });
  const { search } = formState;
  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${search}`);
  };

  return (
    <>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar..."
              name="search"
              value={search}
              className="form-control"
              onChange={handleInputChange}
              autoComplete="off"
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar un Heroe</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">No hay resultados: {q}</div>
            )
          )}

          {heroes.map((h) => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  );
};
