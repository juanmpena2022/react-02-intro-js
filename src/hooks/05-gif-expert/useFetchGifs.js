import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/05-gif-expert/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setState({
        data: gifs,
        loading: false,
      });
    });

    /*return () => {
        second
      }*/
  }, [category]);

  return state;
};
