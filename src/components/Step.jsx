function Step({text, step, active=false}) {
  return (
    <div className="step-container">
      <li className={active ? "step step-active" : "step"}>
        {step}
      </li>

      <div className="container-text-step" >
        <p className="step-pas">STEP {step}</p>
        <p className="step-text" >{text.toUpperCase()}</p>
      </div>
    </div>
  );
}

export { Step };
