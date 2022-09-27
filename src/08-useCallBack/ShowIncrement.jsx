import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Renderizando el Boton -> Show Increment");
  const incrementCounter = () => {
    increment();
  };
  return (
    <button className="btn btn-primary" onClick={() => increment(10)}>
      Increment
    </button>
  );
});
