import { useRef } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
    const navigate = useNavigate();
    const firstDOm = useRef();
    const lastDOm = useRef();
    const emailDOm = useRef();
    const passwordDOm = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const firstValue = firstDOm.current.value;
        const lastValue = lastDOm.current.value;
        const emailValue= emailDOm.current.value;
        const passwordValue = passwordDOm.current.value;

        try {
            const response = await axios.post('/add-employee', {
                firstName: firstValue,
                lastName: lastValue,
                email: emailValue,
                password: passwordValue
            });
            console.log(response.data);
            navigate("/")
        } catch (error) {
            console.error(error.response);
        }
        
    }
  return (
    <>
      <h1>Add employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" ref={firstDOm} />
        <br /><br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" ref={lastDOm} />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" ref={emailDOm}/>
        <br /><br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" ref={passwordDOm}/>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddEmployee;
