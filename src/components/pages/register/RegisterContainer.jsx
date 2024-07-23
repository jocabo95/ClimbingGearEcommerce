import Register from "./Register"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, register } from "../../../firebaseConfig";
import {doc, setDoc} from "firebase/firestore"


const RegisterContainer = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
      setUserCredentials({
        ...userCredentials,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        let res = await register(userCredentials);
        console.log(res);

        // Si hay res.user.uid, crea usuario con rol: user en firebase
        if (res.user.uid) {
          await setDoc(doc(db, "users", res.user.uid), {rol: "user"})
        }

        navigate("/login");
        
      } catch (error) {
        console.log(error);
      }
    };


    const data = {
        navigate,
        showPassword,
        handleClickShowPassword,
        handleChange,
        handleSubmit
    }

  return (
    <Register data={data}/>
  )
}

export default RegisterContainer