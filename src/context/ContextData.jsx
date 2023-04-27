import { useState, createContext, useContext } from "react";
import iconArcade from "/src/assets/images/icon-arcade.svg" 
import iconAdvanced from "/src/assets/images/icon-advanced.svg" 
import iconPro from "/src/assets/images/icon-pro.svg" 



const data = {
  arrPlans: [
    {
      plan: "Arcade",
      monthly: 9,
      yearly: 90,
      icon: iconArcade,
    },
    {
      plan: "Advanced",
      monthly: 12,
      yearly: 120,
      icon: iconAdvanced,
    },
    {
      plan: "Pro",
      monthly: 15,
      yearly: 150,
      icon: iconPro,
    },
  ],
  accessories: [
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
  ],
};

export const dataContext = createContext();

function ContextData({ children }) {
  
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [step, setStep] = useState(0);
  return (
    <dataContext.Provider
      value={{ data, setSelectedOption, selectedOption, step, setStep }}
    >
      {children}
    </dataContext.Provider>
  );
}

export { ContextData };

/* Este contexto es de solo lectura, en donde en un proyecto real se haría una perición al back
y se guardaria en el contexto.
Lo que cambía es el estado que tiene la opción para la suscripción mensual o anual */