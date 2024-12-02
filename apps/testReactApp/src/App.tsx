import { testFromInside, useTestStore } from "@test/component-lib";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
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
      <p>{testFromInside()}</p>
      <p>{state.count}</p>
      <button onClick={() => increment()}>
        Increment
      </button>
    </>
  );
}

export default App;
