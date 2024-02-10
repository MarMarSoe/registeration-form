const Input = ({ label, name, register, error }) => {
  return (
    <div className="form-input form-input--margin-top">
      <label className="form-input__label">
        {label}
        <span className="require">必須</span>
      </label>
      <input
        {...register(name, {
          required: true,
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "記号・数字は使用できません",
          },
        })}
        className={`form-input__box ${
          error ? "form-input__box-color-error" : ""
        }`}
      />
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default Input;
