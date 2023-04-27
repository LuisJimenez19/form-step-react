import { useState, useContext, useEffect } from "react";
/* context */
import { dataContext } from "../context/ContextData";
import { ContextUser } from "../context/ContextUserInfo";

/* components */
import { DescriptionSection } from "../components/DescriptionSection";
import { PlanCard } from "../components/PlanCard";
/* 
    [
        "arcade": {
            "monthly":9
            "yearly":90
        },"advanced":{
            "monthly":12,
            "yearly:120"
        },"pro":{
            "monthly:15",
            "yearly":150
        }

    ]
*/
function SelectPlan() {
  /* const arrPlans = [
    {
      plan: "Arcade",
      monthly: 9,
      yearly: 90,
      icon: "/src/assets/images/icon-arcade.svg",
    },
    {
      plan: "Advanced",
      monthly: 12,
      yearly: 120,
      icon: "src/assets/images/icon-advanced.svg",
    },
    {
      plan: "Pro",
      monthly: 15,
      yearly: 150,
      icon: "src/assets/images/icon-pro.svg",
    },
  ]; */
  const { data, selectedOption, setSelectedOption } = useContext(dataContext);

  const { selectedPlanUser, setSelectedPlanUser, emptyPlan, setEmptyPlan } = useContext(ContextUser);
  const [selectedPlan, setSelectedPlan] = useState("");

  function handlePlanSelected(event) {
    setEmptyPlan(false)
    const { target } = event;
    const dataprice = event.target.attributes
    setSelectedPlan(target.id);
    const tmp = {
      ...selectedPlanUser,
    };
    tmp.planName = target.id;
    tmp.planPrice = dataprice.data.nodeValue
    setSelectedPlanUser(tmp);
  }

   function handleOptionChange(e) {
    // setSelectedOption(e.target.value);
    console.log("")
  }

  /* Esta función es la que elige el modo de suscribción, la parte mas importante, cuando cambia reinica el precio y la elección */
  function handleClickSwitch(e) {
    setSelectedPlan("")

    selectedOption == "monthly"
      ? setSelectedOption("yearly")
      : setSelectedOption("monthly");

    const plan = {};
    /* Cambiar el estado es asincrono entonces lo tengo que hacer "manual" */
    plan.modeSub = selectedOption == "monthly" ? "yearly" : "monthly";
    setSelectedPlanUser(plan);
    /* el contextoUser solo queda con el modeSub */
  }

  useEffect(() => {
    setSelectedPlanUser({
      modeSub: "monthly",
    });
    setSelectedOption("monthly")
  }, []);

  return (
    <>
      <DescriptionSection
        title={"Select your plan"}
        description={"You have the option of monthly or yearly billing."}
      />
      <section className="plans-container">
        {data.arrPlans.map((item, index) => {
          return (
            <PlanCard
              key={index}
              icon={item.icon}
              plan={item.plan}
              monthly={item.monthly}
              yearly={item.yearly}
              selectedPlan={selectedPlan === item.plan.toLowerCase()}
              onSelectedPlan={handlePlanSelected}
              selectedOption={selectedOption}
            />
          );
        })}
      </section>
      {emptyPlan && (<span className="error-text text-plan" >Elige una opción</span>)}
      {}
      {/* <------------------------Swicht-------------------->*/}
      <div className="selected-mode">
        <label
          className={`label-option ${
            selectedOption === "monthly" ? "option--active" : ""
          }`}
          htmlFor="monthly"
        >
          Monthly
        </label>
        <div onClick={handleClickSwitch} className="switch">
          <input
            id="monthly"
            type="radio"
            name="switch-option"
            value="monthly"
            checked={selectedOption === "monthly"}
            onChange={handleOptionChange}
          />
          <input
            id="yearly"
            type="radio"
            name="switch-option"
            value="yearly"
            checked={selectedOption === "yearly"}
            onChange={handleOptionChange}
          />
          <span className="slider"></span>
        </div>
        <label
          className={`label-option ${
            selectedOption === "yearly" ? "option--active" : ""
          }`}
          htmlFor="yearly"
        >
          Yearly
        </label>
      </div>
    </>
  );
}

export { SelectPlan };
