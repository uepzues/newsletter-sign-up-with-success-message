import { ButtonComp } from "./ButtonComp";
import { EmailComp } from "./EmailComp";
import { ImgComp } from "./ImgComp";
import { InfoComp } from "./InfoComp";
import { NewsLetterComp } from "./NewsLetterComp";
import iconSuccess from "./assets/images/icon-success.svg";

import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ email: "" });
  const [isVis, setIsVis] = useState(false);
  const [isMainVis, setIsMainVis] = useState(true);

  const handleFormSubmit = (data) => {
    setFormData(data);
    if (formData.email == "") {
      setIsMainVis(true);
      setIsVis(false);
    } else {
      setIsMainVis(false);
      setIsVis(true);
    }
  };

  const dismissSuccessMessage = () => {
    // window.location.reload();
    setIsVis(false);
    setIsMainVis(true);
    setFormData({ email: "" });
  };

  return (
    <>
      {isMainVis && (
        <main>
          <ImgComp />
          <div>
            <NewsLetterComp
              header="Stay updated!"
              text="Join 60,000+ product managers receiving monthly updates on:"
            />
            <InfoComp info="Product discovery and building what matters" />
            <InfoComp info="Measuring to ensure updates are a success" />
            <InfoComp info="And much more!" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit({ email: formData.email });
              }}
            >
              <EmailComp setFormData={setFormData} formData={formData} />
              <ButtonComp name={"Subscribe to monthly newsletter"} />
            </form>
          </div>
        </main>
      )}

      {/* ############ */}

      {isVis && (
        <div className="success">
          <img src={iconSuccess} alt="success icon" />
          <NewsLetterComp
            header="Thanks for subscribing!"
            text={`A confirmation email has been sent to ${formData.email}. Please open it and click the button inside to confirm your subscription.`}
          />
          <div>
            <button onClick={dismissSuccessMessage} type="submit">
              Dismiss Message
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
