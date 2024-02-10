import "./AgeInput.css";

const AgeInput = ({ label, name, register, error }) => {
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
        className={`age-input__box ${
          error ? "age-input__box-color-error" : ""
        } `}
        maxLength="2"
      />
      {error && <p className="age-error-msg">{error}</p>}
    </div>
  );
};

export default AgeInput;
