import { ButtonComp } from "./ButtonComp";
import { NewsLetterComp } from "./NewsLetterComp";
import iconSuccess from "./assets/images/icon-success.svg";
import "./SuccessComp.css";

export function SuccessComp({ formData, emailadd }) {
  alert(button);

  return (
    <div>
      <img src={iconSuccess} alt="success icon" />
      <NewsLetterComp header="Thanks for subscribing!">
        A confirmation email has been sent to {formData}. Please open it
        and click the button inside to confirm your subscription.
      </NewsLetterComp>
      <ButtonComp name={"Dismiss message"} />
    </div>
  );
}
