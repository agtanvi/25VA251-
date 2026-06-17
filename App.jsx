import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <main className="app-shell">
      <section className="counter-card">
        <p className="counter-label">Counter</p>
        <h1>{count}</h1>

        <div className="button-row">
          <button className="btn decrement-btn" onClick={decrement}>
            −
          </button>
          <button className="btn reset-btn" onClick={reset}>
            Reset
          </button>
          <button className="btn increment-btn" onClick={increment}>
            +
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;