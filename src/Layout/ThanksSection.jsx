import "../css/thanks-section.css";
import image from "/src/assets/images/icon-thank-you.svg"

function ThanksSection() {
  return (
    <section className="container-thank-you">
      <div className="container-icon-thanks">
        <img
          className="icon-thank"
          src={image}
          alt="icon-thanks"
        />
      </div>
      <h2 className="title" >Thank you!</h2>
      <div className="text-thanks">
        <p>
          Thanks for confirming your subscripion! <br />
          We hope you have fun using our plataform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>

      <footer className="attributon">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/profile/LuisJimenez19"
          target="_blank"
          className="link"
        >
          Frontend Mentor.
        </a>
        Coded by{" "}
        <a target="_blank" href="https://github.com/LuisJimenez19" className="link-user">
          Luis Angel.
        </a>
      </footer>
    </section>
  );
}

export { ThanksSection };
