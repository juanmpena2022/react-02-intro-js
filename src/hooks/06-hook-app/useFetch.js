import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMountedRef = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (isMountedRef.current) {
            console.log("se llamo setState");
            setState({
              data: data,
              loading: false,
              error: null,
            });
          } else {
            console.log("no se llamo setState");
          }
        }, 1000);
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error: error,
        });
      });
  }, [url]);

  return state;
};
