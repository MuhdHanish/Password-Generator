import PropTypes from "prop-types";

const GenerateButton = ({ generatePassword }) => {
  return (
    <button className="generate-btn" onClick={generatePassword}>
      Generate Password
    </button>
  );
};

GenerateButton.propTypes = {
  generatePassword: PropTypes.func.isRequired,
};

export default GenerateButton