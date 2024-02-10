const Label = ({ name, label }) => {
  return (
    <label htmlFor={name} className="form-input__label">
      {label}
      <span className="form-input__require">必須</span>
    </label>
  );
};

export default Label;
