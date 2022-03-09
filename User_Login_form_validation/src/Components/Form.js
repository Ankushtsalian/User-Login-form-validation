import { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import img2 from "../images/img2.svg";
import "./Form.css";
export default function Form() {
  const [isSubmitted, setSubmitted] = useState(false);
  function submitForm() {
    setSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src={img2} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}
