import {
  composeValidators,
  requireValidator,
} from "../../validators/validators";
import "./RadioInput.css";

const RadioInput = ({ name, label, register }) => {
  return (
    <div className="gender">
      <input
        type="radio"
        className="gender__select"
        name={name}
        value={label}
        {...register(name, composeValidators(requireValidator))}
      />
      <label className="gender__name" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
