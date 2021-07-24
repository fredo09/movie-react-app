/**
*   Fetch personalizado para consumir Api  
**/

import { useState, useEffect } from 'react';

/** Funcion que hace fetch a la api de the-moviedb usando un hook personalizado de react
 * @param  {string}  uri -> ruta de donde se consumira la api
 * @param  {string} optinos -> option de accion realizar con la api
 * @returns {object} resultado una vez hecho la api
 */

export function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}