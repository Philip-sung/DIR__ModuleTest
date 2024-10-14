import { useState } from "react";
import { useText } from "./useTest";

function App() {
  console.log("RERENDERED");
  const welcomeText: JSX.Element = (
    <div>
      <strong>How to create VoilerPlate</strong>
    </div>
  );

  const { Num, inc, dec } = useText();

  return (
    <>
      <h1>{welcomeText}</h1>
      <p>npm install -g vite</p>
      <p>npm create vite</p>
      <p>{Num.Num}</p>
      <button onClick={() => inc()}>Inc</button>
      <button onClick={() => dec()}>dec</button>
    </>
  );
}

export default App;
