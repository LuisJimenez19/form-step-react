import { useContext, useState, useEffect, useRef } from "react";
/* components */
import { DescriptionSection } from "../components/DescriptionSection";
/* context */
import { ContextUser } from "../context/ContextUserInfo";
import { dataContext } from "../context/ContextData";
/* styles */
import "../css/personal-info.css";

function PersonalInfo() {
 
  /* estado para los errores */
  const [formErrors, setFormErros] = useState({});
  const contextUser = useContext(ContextUser);
  const { infoUser, setInfoUser } = contextUser;
  const {setStep} = useContext(dataContext)

  /* Llena el estado local */
  function handleForm(e) {
    const user = { ...infoUser };
    user[e.target.id] = e.target.value;
    setInfoUser(user);
  }
  /* verifica si hay o no errores */
  function validateForm(info) {
    const errors = {};
    if (!info.name) {
      errors.name = "Name is required";
    }
    if (!info.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(info.email)) {
      errors.email = "Email is invalid";
    }
    if (!info.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }

    return errors;
  }

  /* verifica primero y después actualiza al estado local */
  function handleSubmit(info) {
  
    const errors = validateForm(info);
    setFormErros(errors);
    if (Object.keys(errors).length === 0) {
      setInfoUser(info);
      return true;
    }
  }
  const functionRef = useRef(handleSubmit);

  useEffect(() => {
    contextUser.setRefFunction(functionRef);
    setInfoUser({})
  }, []);

  return (
    <>
      <DescriptionSection
        title={"Personal info"}
        description={
          "Please provide your name, email address, and phone number"
        }
      />

      <form
        // ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(infoUser) && setStep((oldstep) => oldstep + 1);
        }}
        className="inputs-container"
      >
        <div className="input-control">
          <label htmlFor="name">Name</label>
          <input
            autoFocus
            onChange={handleForm}
            type="text"
            id="name"
            placeholder="Sthepen King"
          />
          {formErrors.name && (
            <span className="error-text">{formErrors.name}</span>
          )}
        </div>
        <div className="input-control">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={handleForm}
            id="email"
            placeholder="example@gmail.com"
          />
          {formErrors.email && (
            <span className="error-text">{formErrors.email}</span>
          )}
        </div>

        <div className="input-control">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            onChange={handleForm}
            type="number"
            maxLength={10}
            id="phoneNumber"
            placeholder="+54 1234567890"
          />
          {formErrors.phoneNumber && (
            <span className="error-text">{formErrors.phoneNumber}</span>
          )}
        </div>
        <button style={{ display: "none" }}>submit</button>
      </form>
    </>
  );
}
export { PersonalInfo };

/* handleForm llena el contexto del usuario usando el id como clave, 
handleSubmit llama a la función validateForm que verifica que los 3 datos esten, y después devuelve true poder navegar,
esta función se guarda en una referencia para poder ser usada desde el compnente que lleva toda la interactividad.  */