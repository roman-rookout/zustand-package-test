import { testFromInside, useTestStore } from "@test/component-lib";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as ReactDOM from "react-dom";
import * as React from "react";

import { TestComponent } from "@test/component-lib";
// (async () => {
//   try {
//     console.log(import.meta.url);
//     const modulePath = import.meta.resolve("./react-dom");
//     console.log(`react is resolved to:`, modulePath);
//   } catch (error) {
//     console.error(`Error resolving react`, error);
//   }
// })();

(window as any).React2 = React;
console.log("check if index.js react is fine!");
console.log((window as any).React1 === (window as any).React2);
console.log("check if react between libs is fine!");
console.log((window as any).React3 === (window as any).React2);
console.log("react3", (window as any).React3);

console.log("React version:", React.version);
console.log("ReactDOM version:", ReactDOM.version);

function App() {
  const [count, setCount] = React.useState(5);
  console.log("use count state:", count);

  const { state, increment } = useTestStore();
  //const number = useTestStore((state) => state.count);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Zustand test</h1>
      <TestComponent />
      <p>{testFromInside()}</p>
      {/* <p>{state.count}</p>
      <button onClick={() => increment()}>Increment</button> */}
    </>
  );
}

export default App;
