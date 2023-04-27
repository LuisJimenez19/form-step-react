import { useContext } from "react";
import { DescriptionSection } from "../components/DescriptionSection";
/* styles */
import "../css/summary-section.css";
/* context */
import { ContextUser } from "../context/ContextUserInfo";
import { dataContext } from "../context/ContextData";
/* helper */
import { capitalize } from "../helpers/capitalize.js";
function SummarySection() {
  const {setStep} = useContext(dataContext)
  const { infoUser, addOns, selectedPlanUser, user, setUser } =
    useContext(ContextUser);

  const auxMode = selectedPlanUser.modeSub == "monthly" ? "mo" : "yr" 
  const auxSub = selectedPlanUser.modeSub == "monthly" ? "month" : "year" 
  
  /* Funcion que crea el objeto a enviar */
  function handleInfoSub() {
    const objToSend = {
      user: infoUser,
      plan: {
        name: selectedPlanUser.planName,
        modeSub: selectedPlanUser.modeSub,
        price: selectedPlanUser.planPrice,
        addOns: addOns,
      },
    };
    setUser(objToSend);
  }
  return (
    <>
      <DescriptionSection
        title={"Finishing up"}
        description={"Double-check everything looks OK before confirming."}
      />
      <section className="container-summary">
        <div className="summary">
          <div className="summary-flex summary__plan">
            <div className="summary__plan__sub-mode">
              <p>
                {capitalize(selectedPlanUser.planName)} ({capitalize(selectedPlanUser.modeSub)})
              </p>
              {/* back selected plan */}
              <span className="btn-change" onClick={()=>{
                setStep((old) => old - 2)
              }}  >Change</span>
            </div>
            <p>${selectedPlanUser.planPrice}/{auxMode}</p>
          </div>

          <div className="summary__add-ons">
            {Object.entries(addOns).map(([key, value]) => (
              <div className="summary-flex" key={key}>
                <p>{key}</p>
                <p className="price">+${value}/{auxMode}</p>
              </div>
            ))}
          </div>
        </div>
        <div onClick={handleInfoSub} className="all-per">
          <p>Total (per {auxSub})</p>
          <p className="price">
            +$
            {Object.values(addOns)
              .map((value) => parseInt(value))
              .reduce((total, value) => total + value, 0) +
              parseInt(selectedPlanUser.planPrice)}
            /{auxMode}
          </p>
        </div>
      </section>
    </>
  );
}

export { SummarySection };
