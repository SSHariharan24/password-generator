import  { useState } from 'react'

export const PasswordGenerator = () => {
    const [length,setLength] = useState();
    const [includeUppercase,setIncludeUpperCase] = useState(true);
    const [includeLowercase,setIncludeLowerCase] = useState(true);
    const [includeNumber,setIncludeNumber] = useState(true);
    const [includeSymbol,setIncludeSymbol] = useState(true);
    const [password,setPassword] = useState("");

    const generatePassword = () => {
        let charset = "";
        if(includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTQVWXYZ";
        if(includeLowercase) charset += "abcdefghijklmnopqrstqvwxyz";
        if(includeNumber) charset += "0123456789";
        if(includeSymbol) charset += "!@#$%^&*()_-+=";
       console.log(charset);
        let generatedPassword = "";
        for (let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
       setPassword(generatedPassword);
    };

    const copytoclipboard = ()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    }

  return (
    <div className="password-generator">
        <h2>strong password generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length:</label>
            <input type="number"  id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div>
            <div className="checkbox-group">
                <input type="checkbox"  id="upper" checked={includeUppercase} onChange={(e)=>setIncludeUpperCase(e.target.checked)}/>
                <label htmlFor="upper">Include Uppercase</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox"  id="lower" checked={includeLowercase} onChange={(e)=>setIncludeLowerCase(e.target.checked)} />
                <label htmlFor="lower">Include Lowercase</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox"  id="number" checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)} />
                <label htmlFor="number">Include Numbers</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox"  id="symbols" checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)}/>
                <label htmlFor="symbols">Include Symbols</label>
            </div>
        </div>
        <button className="generate-btn" onClick={generatePassword} >Generate Password</button>
        <div className="generate-pwd">
            <input type="text" value={password} readOnly />
            <button className="copy-btn" onClick={copytoclipboard} >copy</button>
        </div>
    </div>
  )
}

