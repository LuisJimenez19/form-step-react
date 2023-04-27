import { useState, useRef, useContext, useEffect } from "react";
import { dataContext } from "../context/ContextData";
import { ContextUser } from "../context/ContextUserInfo";

function AddOnsCard({ name, description, monthly, yearly }) {
  const [isChecked, setIsChecked] = useState(false);
  const containerRef = useRef(null);

  const { selectedOption } = useContext(dataContext);

  const { addOns, setAddOns } = useContext(ContextUser);

  function handleCheckboxChange(event) {
    setIsChecked(!isChecked);

    const container = containerRef.current;
    if (container) {
      container.classList.toggle("selected");
      const nameAdd = event.target.id;
      const priceAdd = event.target.attributes.data.nodeValue;

      const tmp = {
        ...addOns,
      };
      // Si el checkbox está seleccionado, agrega la opción al contexto
      if (!isChecked) {
        tmp[nameAdd] = priceAdd;
      } else {
        // Si el checkbox no está seleccionado, elimina la opción del contexto
        delete tmp[nameAdd];
      }

      setAddOns(tmp);
    }
  }
  useEffect(() => {
    setAddOns({});
  }, []);

  return (
    <label htmlFor={name} className="add-ons" ref={containerRef}>
      <div className="flex container-text">
        <input
          data={selectedOption === "yearly" ? yearly : monthly}
          type="checkbox"
          id={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="container-label">
          <p className="add-ons-name">{name}</p>
          <p className="add-ons-description">{description}</p>
        </div>
      </div>
      {selectedOption === "yearly" ? (
        <p className="cash-add">${yearly}/year</p>
      ) : (
        <p className="cash-add">${monthly}/mo</p>
      )}
    </label>
  );
}

export { AddOnsCard };
