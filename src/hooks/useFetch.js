import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [status, setStatus] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });
  const getData = async () => {
    setStatus({
      data: null,
      isLoading: true,
      hasError: false,
    });
    const resp = await fetch(url);
    const data = await resp.json();
    setStatus({ data, isLoading: false, hasError: false });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: status.data,
    isLoading: status.isLoading,
    hasError: status.hasError,
  };
};
