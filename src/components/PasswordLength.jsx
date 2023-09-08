import PropsTypes from "prop-types";

const PasswordLength = ({ passwordLength, setPasswordLength }) => {
  return (
    <div className="pass-length">
      <div className="details">
        <label htmlFor="" className="title">
          Password Length
        </label>
        <span>{passwordLength}</span>
      </div>
      <input
        type="range"
        min={1}
        max={30}
        value={passwordLength}
        step={1}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
      />
    </div>
  );
};

PasswordLength.propTypes = {
  passwordLength: PropsTypes.number.isRequired,
  setPasswordLength: PropsTypes.func.isRequired,
};

export default PasswordLength;
