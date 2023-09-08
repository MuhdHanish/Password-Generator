import PropTypes from "prop-types";

const PasswordStrengthIndicator = ({ strength }) => {
  return (
    <div
      className="pass-indicator"
      id={
        strength === "Strong"
          ? "strong"
          : strength === "Medium"
            ? "medium"
            : "weak"
      }
    ></div>
  );
};

PasswordStrengthIndicator.propTypes = {
  strength: PropTypes.string.isRequired
};

export default PasswordStrengthIndicator