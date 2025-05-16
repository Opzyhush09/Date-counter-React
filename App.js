import logo from "./logo.svg";
import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("May 16 2025");
  date.setDate(date.getDate() + count);
  return (
    <div className="countercomponent">
      <div className="countersub">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> step :{step} </span>
      </div>

      <div className="countersub">
        <button className="btn-cnt" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn-cnt" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <p className="count-p">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div className="Reset">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
