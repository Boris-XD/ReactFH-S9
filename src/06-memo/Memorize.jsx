import { useState } from "react";
import { useCounter } from "../hooks";
import { ShowCounter } from "./ShowCounter";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [turnOff, setTurnOff] = useState(false);
  return (
    <div>
      <h1>Memorize Counter Render</h1>
      <ShowCounter value={counter} />
      <button className="btn btn-primary" onClick={increment} >Increment </button>
      <button onClick={() => setTurnOff(!turnOff)}>
        Change - {JSON.stringify(turnOff)}
      </button>
    </div>
  );
};
