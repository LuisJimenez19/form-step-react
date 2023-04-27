import { useContext } from "react";
/* Context */
import { AddOns } from "./AddOns";
/* layaouts */
import { PersonalInfo } from "./PersonalInfo";
import { SelectPlan } from "./SelectPlan";
/* components */
import { BtnNextBack } from "../components/BtnNextBack";
import { dataContext } from "../context/ContextData";
import { SummarySection } from "./SummarySection";
import { ThanksSection } from "./ThanksSection";

function CardFormLayout() {
  const { step } = useContext(dataContext);

  return (
    <div className="card-form-principal">
      <div className={`container-section ${step === 4 && "section--thank"}`}>
        {step === 0 && <PersonalInfo />}
        {step === 1 && <SelectPlan />}
        {step === 2 && <AddOns />}
        {step === 3 && <SummarySection />}
        {step === 4 && <ThanksSection/>}
      </div>
        {/* btns next and back */}
      {step <= 3 && <BtnNextBack />}
    </div>
  );
}

export { CardFormLayout };

/* Este es layaout en donde se renderizan los pasos del formulario */
/* Un contexto en donde van a estar los arrglos para renderizar las elecciones y también
va ir la información que el usuario elija. */
/* Falta hacer el summary, son 3 estados 2 los cuales tienen que sumarse y después los uno como si fuera para enviarse a un back */
