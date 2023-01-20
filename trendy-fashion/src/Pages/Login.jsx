import style from "../Style/Login.module.css"
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Login() {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [auth, setAuth] = React.useState(false);
  let [token, setToken] = React.useState("");
  let navigate=useNavigate()
  let login = () => {
    if (!email || !password) {
      alert("Fill the blanks");
      return;
    }

    const payload = {
      email,
      password
    };
    axios.post("https://reqres.in/api/login", payload).then((res) => {
      alert("Login Successfully");
      setAuth(true);
      console.log(res.data);
      setToken(res.data.token);
    });
   navigate("/dashboard")
  };
  let logout = () => {
    setAuth(false);
  };
  if (auth) {
    return (
      <div>
       
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  return (
    <div className={style.big}>
    <div className={style.login}>
      <h1>Welcome to AJIO</h1>
      <p>Join/Sign In using</p>
      <img src="https://i.imgur.com/zvcvloi.png" alt="xx" />
      <br/>
      
      <label>Enter email:</label>
      <br/>
      
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <br />
      <br />
      <label> Enter password:</label>
      <br/>
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button bgColor='#D5a249' onClick={login}>CONTINUE</Button>
    <p>By Signing in, i agree to <span><a href="https://www.ajio.com/help/termsAndCondition"> Terms and Conditions</a>
       </span></p>
    </div>
    </div>
  );
}

