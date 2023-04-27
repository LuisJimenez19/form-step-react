/* contexts */
import { ContextUserInfo } from "../context/ContextUserInfo";
import { ContextData } from "../context/ContextData";
/* components */
import { NavSteps } from "../components/NavSteps";
import { CardFormLayout } from "../Layout/CardFormLayout";

function FormPage() {
  return (
    <main className="container-form">
      {/* Aquì es donde va el nav para los pasos. */}
      <ContextData>
        <ContextUserInfo>
          <NavSteps />
          <div className="container-sections">
            <CardFormLayout />
          </div>
        </ContextUserInfo>
      </ContextData>
    </main>
  );
}

export { FormPage };

/* La página se divide entre el nav, que solo muestra en que paso esta el usuario 
el card form es donde se renderizaran las secciones y tiene los botones que navegaran entre si  */
/* En este FormPage es donde va el contexto, donde estara la información del usuario y el counter que servira para el ubicar las secciones */
