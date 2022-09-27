import React from "react";
import { useCounter, useFetch } from "../hooks";
import { Loading, Quote } from "./";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <div className="m-5">
      <h1>Breaking Bad Quotes - {counter}</h1>
      <hr />
      {isLoading ? <Loading /> : <Quote quote={quote} author={author} />}
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};

export default Layout;
