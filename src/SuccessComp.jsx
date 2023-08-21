import { ButtonComp } from "./ButtonComp";
import { NewsLetterComp } from "./NewsLetterComp";
import iconSuccess from "./assets/images/icon-success.svg";
import "./SuccessComp.css";

export function SuccessComp({ formData }) {
  alert(button);

  return (
    <div>
      <img src={iconSuccess} alt="success icon" />
      <NewsLetterComp
        header="Thanks for subscribing!"
        text={`A confirmation email has been sent to ${<strong>{formData}</strong>}. Please open it and click the button inside to confirm your subscription.`}
      />
      <ButtonComp name={"Dismiss message"} />
    </div>
  );
}
