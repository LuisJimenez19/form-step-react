import {useContext} from "react";
/* context */
import {dataContext} from "../context/ContextData";
import { ContextUser } from "../context/ContextUserInfo";
/* components */
import { AddOnsCard } from "../components/AddOnsCard";
import { DescriptionSection } from "../components/DescriptionSection";
/* styles */
import "../css/add-ons.css";

function AddOns() {
  /* const accessories = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthly: 1,
      yearly: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthly: 2,
      yearly: 20,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      monthly: 2,
      yearly: 20,
    },
  ]; */
  const {data} = useContext(dataContext)
  const {accessories} = data
  return (
    <>
      <DescriptionSection
        title={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience"}
      />
      <div className="accesories-container">
        {accessories.map((item, index) => {
          return (
            <AddOnsCard
              name={item.name}
              description={item.description}
              monthly={item.monthly}
              yearly={item.yearly}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export { AddOns };
