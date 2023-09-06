import { useState } from "react";

export default function Wellcome(props) {
  const [counter, setCounter] = useState(0);
  const { message, name } = props;

  return (
    <div>
      <h1>Hola, {name}</h1>
      <h2>Contador de React con Hooks</h2>
      <h4>El numero del contador es: {counter}</h4>
      <button type="submit" onClick={() => setCounter(counter + 1)}>
        Sumar Contador
      </button>
    </div>
  );
}
