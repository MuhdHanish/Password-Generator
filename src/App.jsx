import { useEffect, useState, useCallback } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import PasswordLength from "./components/PasswordLength";
import PasswordSettings from "./components/PasswordSettings";

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

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="wrapper">
        <PasswordInput isCopied={isCopied} setIsCopied={setIsCopied} password={password} />
        <PasswordStrengthIndicator strength={strength} />
        <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
        <PasswordSettings
          includeLowercase={includeLowercase} includeUppercase={includeUppercase}
          includeNumbers={includeNumbers} includeSymbols={includeSymbols}
          setIncludeLowercase={setIncludeLowercase} setIncludeUppercase={setIncludeUppercase}
          setIncludeNumbers={setIncludeNumbers} setIncludeSymbols={setIncludeSymbols}
        />
        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
