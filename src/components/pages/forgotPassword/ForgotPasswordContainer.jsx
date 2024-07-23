import ForgotPassword from "./ForgotPassword"
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../firebaseConfig";


const ForgotPasswordContainer = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    let handleChange = (e) => {
      setEmail(e.target.value);
    };

    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await forgotPassword(email);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };

    const data={
        navigate, email, handleChange, handleSubmit
    }

  return (
    <ForgotPassword data={data}/>
  )
}

export default ForgotPasswordContainer