import React from "react";

export const ShowCounter = React.memo(({ value }) => {
  console.log("Rendering Right Now");
  return <h2>Counter Now is: {value}</h2>;
});
