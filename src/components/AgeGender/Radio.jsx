const Radio = ({ name, label }) => {
  return (
    <div className="gender gender__padding">
      <input
        type="radio"
        className="gender__select"
        name={name}
        value={label}
      />
      <label className="gender__name" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
