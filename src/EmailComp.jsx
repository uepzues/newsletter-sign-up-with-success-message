import { useState } from "react";
import "./EmailComp.css";

export function EmailComp({ setFormData, formData }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormData({ formData, email: e.target.value });
    if (!e.target.checkValidity()) {
      document.querySelector(".error").innerHTML = "Valid email required";
    } else {
      document.querySelector(".error").innerHTML = "";
    }
  };

  return (
    <>
      <label htmlFor="email">
        Email address<span className="error"></span>
      </label>
      <input
        onChange={handleEmailChange}
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        value={email}
      />
    </>
  );
}
