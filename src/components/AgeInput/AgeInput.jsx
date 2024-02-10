import { useState } from "react";
import "./AgeInput.css";

const AgeInput = ({ label, name, register, error }) => {

  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="age-input age-input--margin-top">
      <label className="age-input__label age-input__label--margin-bottom">
        {label}
        <span className="require">必須</span>
      </label>
      <input
        {...register(name, {
          required: true,
          pattern: {
            value: /^[0-9\b]+$/,
            message: "半角数字以外は使用できません",
          },
        })}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={`age-input__box ${
          error ? "age-input__box-color-error" : isFocus ? "age-input__box-color-focus" : ""
        } `}
        maxLength="2"
      />
      {error && <p className="age-error-msg">{error}</p>}
    </div>
  );
};

export default AgeInput;
