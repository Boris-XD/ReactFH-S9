import { useState, useMemo } from "react";
import { useCounter } from "../hooks";

const heavyWork = (value) => {
  for (let i = 0; i < value; i++) {
    console.log("rendering Value....");
  }
  return value;
};

export const UseMemorize = () => {
  const { counter, increment } = useCounter(5000);
  const [turnOff, setTurnOff] = useState(false);
    const memorizedValue = useMemo( () => heavyWork(counter), [counter])
  return (
    <div>
      <h1>Memorize Counter Render</h1>
      <h2>Contador {memorizedValue}</h2>
      <button className="btn btn-primary" onClick={increment}>
        Increment{" "}
      </button>
      <button onClick={() => setTurnOff(!turnOff)}>
        Change - {JSON.stringify(turnOff)}
      </button>
    </div>
  );
};
