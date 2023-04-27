import { useState, useContext } from "react";

import { dataContext } from "../context/ContextData";
import { Step } from "./Step";
import "../css/nav-steps.css";

function NavSteps() {
  const arra = ["Your info", "Select plan", "Add-ons", "Summary"];
  const [arr, setArr] = useState(arra);
  const {step} = useContext(dataContext)
  return (
    <div className="bg-image-form">
      <nav className="nav-steps">
        <ul className="steps-container">
          {arr.map((item, index) => {
            return <Step key={index} text={item} step={index + 1} active={step === index || step === 4} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export { NavSteps };

/* Este componente solo va a informar al usuario en que paso se encuentra. */
