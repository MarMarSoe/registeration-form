import { useState } from "react";
import "./Input.css";
import {
  characterCheckValidator,
  composeValidators,
  requireValidator,
} from "../../validators/validators";

const Input = ({ label, name, register, error }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="form-input">
      <label className="form-input__label">
        {label}
        <span className="require">必須</span>
      </label>
      <input
        {...register(
          name,
          composeValidators(requireValidator, characterCheckValidator)
        )}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={`form-input__box ${
          error
            ? "form-input__box-color-error"
            : isFocus
            ? "form-input__box-color-focus"
            : ""
        }`}
      />
      {error && <p className="name-error-msg">{error}</p>}
    </div>
  );
};

export default Input;
