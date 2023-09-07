import { useEffect, useState, useCallback } from "react";

function App() {
  
  const [isCopied, setIsCopied] = useState(false);
  const [strength, setStrength] = useState("Strong");
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  function checkPasswordStrength(password) {
    const lengthCriteria = 8; 
    const mediumStrengthCriteria =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;
    const strongStrengthCriteria =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
    
    if (password.length < lengthCriteria) {
      return setStrength("Weak");
    } else if (mediumStrengthCriteria.test(password)) {
      return setStrength("Medium");
    } else if (strongStrengthCriteria.test(password)) {
      return setStrength("Strong");
    } else {
      return setStrength("Weak");
    }
  }

  useEffect(() => {
    const copyTimeout = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      clearTimeout(copyTimeout);
    };
  }, [isCopied]);

  const generatePassword = useCallback(() => {
    let charset = "";

    if (includeLowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      charset += "0123456789";
    }
    if (includeSymbols) {
      charset += "!@#$%^&*()_+";
    }

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }
    checkPasswordStrength(newPassword);
    setPassword(newPassword);
  },[includeLowercase, includeNumbers, includeSymbols, includeUppercase, passwordLength]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword,passwordLength]);

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
    <div className="container">
      <h2>Password Generator</h2>
      <div className="wrapper">
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
        <div className="pass-indicator" id={strength === "Strong" ? "strong" : strength === "Medium" ? "medium" : "weak"}></div>
        <div className="pass-length">
          <div className="details">
            <label htmlFor="" className="title">
              Password Length
            </label>
            <span>{passwordLength}</span>
          </div>
          <input type="range" min={1} max={30} value={passwordLength} step={1}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </div>
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
        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
