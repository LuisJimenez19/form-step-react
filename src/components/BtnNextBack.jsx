import { useContext } from "react";
import { dataContext } from "../context/ContextData";
import { ContextUser } from "../context/ContextUserInfo";

function BtnNextBack() {
  const { step, setStep } = useContext(dataContext);
  const { refFunction, infoUser, selectedPlanUser, setEmptyPlan } =
    useContext(ContextUser);
  // const { infoUser } = contextUser;

  function handleNextStep() {
    const validate = refFunction.current(infoUser);
    /* form */
    if (step === 0 && validate) {
      setStep((oldStep) => oldStep + 1);
      /* Selected plan */
    } else if (step === 1) {
      if (Object.keys(selectedPlanUser).length > 1) {
        setEmptyPlan(false);
        setStep((oldStep) => oldStep + 1);
      } else {
        setEmptyPlan(true);
      }
      /* add ons */
    } else if (step === 2) {
      setStep((oldStep) => oldStep + 1);
    }/* summary */
    else if (step === 3){
      setStep((oldStep) => oldStep + 1);
    }
  }
  function handleBackStep() {
    setStep((oldStep) => oldStep - 1);
  }

  return (
    <div className="container-btn">
      <button
        onClick={handleNextStep}
        // className="btn btn-steps"
        className={`btn btn-steps ${step && "confirm"}`}
      >
      {step === 3 ? "Confirm" : "Next Step"}
      </button>
      {step > 0 && (
        <span onClick={handleBackStep} className="btn back-step">
          Go back
        </span>
      )}
    </div>
  );
}

export { BtnNextBack };
/* cuando el step sea 3 osea en el summary debe decir confirm y debe confirmar la subscripción */
