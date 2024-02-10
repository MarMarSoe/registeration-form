import Radio from "./Radio";
import Required from "../Required";
import Title from "../Title";
import Input from "../Input";
import Age from "./Age";

const GenderAgeInput = ({ name, label, register, errors }) => {
  return (
    <div className="gender">
      <Title title="年齢・性別" />
      <div className="gender-input gender-input--margin-top">
        <label htmlFor={name} className="gender-input__label">
          {label}
          <span className="require">必須</span>
        </label>
        <Radio label="男性" name="gender-selection" />
        <Radio label="女性" name="gender-selection" />
        <Radio label="無回答・その他" name="gender-selection" />
        <Age
          register={register}
          label="年齢"
          name="age"
          error={errors.age && errors.age.message}
        />
      </div>
    </div>
  );
};

export default GenderAgeInput;
