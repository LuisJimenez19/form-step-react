
import "../css/plan-card.css";

function PlanCard({
  icon,
  plan,
  monthly,
  yearly,
  selectedPlan,
  onSelectedPlan,
  selectedOption,
}) {
  function handleClick(e) {
    onSelectedPlan(e);
  }

  return (
    <div
      id={plan.toLowerCase()}
      className={`plan-card ${selectedPlan && "active"}`}
      onClick={handleClick}
      data={selectedOption === "yearly" ? yearly : monthly}
    >
      {/* icon */}
      <div
        className="icon-plan"
        style={{ backgroundImage: `url(${icon})` }}
      ></div>

      <div className="description-plan">
        <p className="title-plan">{plan}</p>
        {/* if monthly is active */}
        {selectedOption === "yearly" ? (
          // if yearly is active
          <div>
            <p className="cash-plan">${yearly}/year</p>
            <span>2 motnhs free</span>
          </div>
        ) : (
          // if monthly is active
          <p className="cash-plan">${monthly}/mo</p>
        )}
      </div>
    </div>
  );
}

export { PlanCard };
