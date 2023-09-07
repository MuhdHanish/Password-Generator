
function App() {
  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="wrapper">
        <div className="input-box">
          <input type="text" name="" id="" disabled />
          <span className="material-symbols-outlined">copy_all</span>
        </div>
        <div className="pass-indicator"></div>
        <div className="pass-length">
          <div className="details">
            <label htmlFor="" className="title">
              Password Length
            </label>
            <span></span>
          </div>
          <input type="range" min={1} max={30} value={15} step={1} />
        </div>
        <div className="pass-settings">
          <label htmlFor="" className="title">
            Password settings
          </label>
          <ul className="options">
            <li className="option">
              <input type="checkbox" id="lowercase" checked />
              <label htmlFor="lowercase">Lowercase (a-z)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="uppercase" />
              <label htmlFor="uppercase">Uppercase (A-Z)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="numbers" />
              <label htmlFor="numbers">Numbers (0-9)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="symbols" />
              <label htmlFor="symbols">Symbols (!-$^+)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="exc-duplicate" />
              <label htmlFor="exc-duplicate">Exclude Duplicate</label>
            </li>
            <li className="option">
              <input type="checkbox" id="spaces" />
              <label htmlFor="spaces">Include Spaces</label>
            </li>
          </ul>
        </div>
        <button className="generate-btn">Generate Password</button>
      </div>
    </div>
  );
}

export default App
