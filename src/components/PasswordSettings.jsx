import PropTypes from "prop-types";

const PasswordSettings = ({
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  setIncludeLowercase,
  setIncludeUppercase,
  setIncludeNumbers,
  setIncludeSymbols,
}) => {
  return (
    <div className="pass-settings">
      <label htmlFor="" className="title">
        Password settings
      </label>
      <ul className="options">
        <li className="option">
          <input
            type="checkbox"
            id="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <label htmlFor="lowercase">Lowercase (a-z)</label>
        </li>
        <li className="option">
          <input
            type="checkbox"
            id="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label htmlFor="uppercase">Uppercase (A-Z)</label>
        </li>
        <li className="option">
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label htmlFor="numbers">Numbers (0-9)</label>
        </li>
        <li className="option">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <label htmlFor="symbols">Symbols (!-$^+)</label>
        </li>
      </ul>
    </div>
  );
};

PasswordSettings.propTypes = {
  includeLowercase: PropTypes.bool.isRequired,
  includeUppercase: PropTypes.bool.isRequired,
  includeNumbers: PropTypes.bool.isRequired,
  includeSymbols: PropTypes.bool.isRequired,
  setIncludeLowercase: PropTypes.func.isRequired,
  setIncludeUppercase: PropTypes.func.isRequired,
  setIncludeNumbers: PropTypes.func.isRequired,
  setIncludeSymbols: PropTypes.func.isRequired,
};

export default PasswordSettings