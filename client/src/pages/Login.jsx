import { useRef, useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [check, setCheck] = useState("");

  const emailDOm = useRef();
  const passwordDOm = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDOm.current.value;
    const passwordValue = passwordDOm.current.value;

    try {
      const response = await axios.post("/login", {
        email: emailValue,
        password: passwordValue,
      });
      console.log(response.data);
      setCheck(response.data.message || "Login successful");
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
      setCheck(error.response?.data?.message );
    }
  }

  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label><br />
        <input id="email" name="email" type="email" ref={emailDOm} /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input id="password" name="password" type="password" ref={passwordDOm} /><br /><br />

        <small>{check}</small><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Login;
