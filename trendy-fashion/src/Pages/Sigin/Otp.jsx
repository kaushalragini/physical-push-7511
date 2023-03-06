import React, { useState } from "react";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  const [user, setUser]=useState("Signup/Login")
  
  function handleSendCode() {
    alert (`verification code is 123456`);
    setIsVerificationCodeSent(true);
  }

  function handleLogin(e) {
    e.preventDefault();

    const isVerificationCodeCorrect = verificationCode === "123456"; 
   
    if(isVerificationCodeCorrect){
        alert(`Login sussesfull`);
        window.location.href='/'
        setUser("User")

    }
    else{
        alert(`otp invalid`);
    }
  }

  return (
    <div style={{border:'1px solid black', padding:'30px', margin:'auto'}}>
        <div style={{border:'1px solid black', padding:'30px',width: 'fitContent'}}>
      <h2>SignUp</h2><br />
      <form onSubmit={handleLogin}>
        <label>
          Phone Number:
          <input style={{border:'1px solid black', borderRadius:'10px'}}
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />

        </label><br />
        <br />
        {!isVerificationCodeSent && (
          <button style={{border:'1px solid black', padding:'10px', borderRadius:'10px'}} type="button" onClick={handleSendCode}>
            Send Verification Code
          </button>
        )}
        {isVerificationCodeSent && (
          <div>
            <label>
              Verification Code:
              <input style={{border:'1px solid black', padding:'10px', borderRadius:'10px'}}
            type="tel"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            pattern="[0-9]{6}"
            maxLength="6"
            required
          /> <br />
          <br />
            </label>
            <button style={{border:'1px solid black', padding:'10px', borderRadius:'10px'}} type="submit">Login</button>
          </div>
        )}
      </form>
    </div>
    </div>
  );
}

export default Login;
