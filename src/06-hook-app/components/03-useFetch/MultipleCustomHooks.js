import { useCounter } from "../../../hooks/06-hook-app/useCounter";
import { useFetch } from "../../../hooks/06-hook-app/useFetch";
import "./effect.css";

export const MultipleCustomHooks = () => {
  const { value: counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data } = useFetch(url);
  const { author, quote } = data !== null && data[0];

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>Siguiente</button>
    </>
  );
};
