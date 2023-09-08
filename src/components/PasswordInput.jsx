import PropTypes from "prop-types";

const PasswordInput = ({ password, isCopied, setIsCopied }) => {
  const handleCopyClick = async () => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password);
        setIsCopied(true);
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    }
  };
  return (
    <div className="input-box">
      <input type="text" value={password} readOnly />
      {isCopied ? (
        <span className="material-symbols-outlined">check</span>
      ) : (
        <span
          className="material-symbols-outlined"
          onClick={() => {
            handleCopyClick();
          }}
        >
          copy_all
        </span>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  setIsCopied: PropTypes.func.isRequired
};

export default PasswordInput;
