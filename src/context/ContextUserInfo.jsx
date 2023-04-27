import { createContext, useContext, useState, useRef } from "react";

export const ContextUser = createContext();

function ContextUserInfo({ children }) {
  const userDefault = {
    info: {
      name: "",
      email: "",
      phoneNumber: 0,
    },
    selectPlan: {
      /* If monthly or yearly */
      plan: "",
      modeSub: "monthly",
      price: 0,
      addOns: {
        onlineService: 0,
        largerStorage: 0,
      },
    },
  };
  /* Contiene toda la información junta */
  const [user, setUser] = useState({});
  /* Solo la información del usuario */
  const [infoUser, setInfoUser] = useState({});
  const [refFunction, setRefFunction] = useState(null);
  /* el plan seleccionado y el modo de subscripción */
  const [selectedPlanUser, setSelectedPlanUser] = useState({});
  /* cuando no s elija un plan */
  const [emptyPlan, setEmptyPlan] = useState(false)
  /* añadir complementos */
  const [addOns, setAddOns] = useState({})
  return (
    <ContextUser.Provider
      value={{
        user,
        setUser,
        refFunction,
        setRefFunction,
        infoUser,
        setInfoUser,
        selectedPlanUser,
        setSelectedPlanUser,
        emptyPlan,
        setEmptyPlan,
        addOns,
        setAddOns
      }}
    >
      {children}
    </ContextUser.Provider>
  );
}

export { ContextUserInfo };

/* Cada sección tendra un estado y cuando se verifique que si ha seleccionado entonces ese estado se añade a este estado global */
/* ref Element es el formulario para poder activar el evento submit atravez del next step 
No paso el elmento lo que paso es la funciòn que valida y maneja el submit*/
/* Voy a separar los estados en user, plan y add, y en el summary lo junto todo */
