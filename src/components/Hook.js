import React from "react";
import { useRef } from "react";

export default function Hook() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const makeThings = () => {
    alert(inputRef.current.value);
    resultRef.current.innerHTML = inputRef.current.value;
  };

  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={makeThings}>Hacer Algo</button>
      <div ref={resultRef}></div>
    </div>
  );
}
