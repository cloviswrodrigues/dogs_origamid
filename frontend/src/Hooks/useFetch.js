import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async ({ url, options }) => {
    let response;
    let json;
    try {
      setStatus(null);
      response = await fetch(url, options);
      json = await response.json();
      setStatus(response.status);
      setData(json);
      if (status !== 200) {
        setError("Dados Incorretos");
      }
    } catch (error) {
      setError(error);
    }
    return { response };
  }, []);

  return { status, data, error, request };
};

export default useFetch;
