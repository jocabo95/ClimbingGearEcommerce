import Login from "./Login"
import { useContext, useState } from "react";
import { db, googleSignIn, onSignIn } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {collection, doc, getDoc} from "firebase/firestore"
import { AuthContext } from "../../context/AuthContext";



const LoginContainer = () => {

    const {handleLoginAuth} = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
      email: "",
      showPassword: "",
    });

    const navigate = useNavigate();

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
        let res = await onSignIn(userCredentials);

        if(res.user){
          let refCollection = collection(db, "users")
          let refdoc = doc(refCollection, res.user.uid)
          let userDoc = await getDoc(refdoc)

          const userInfo = {id: res.user.uid, email: res.user.email, rol: userDoc.data().rol}

          handleLoginAuth(userInfo)
        }

        
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    const SigninGoogle = async () => {
      try {
        let res = await googleSignIn();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    const data={
        showPassword,
        navigate,
        handleClickShowPassword,
        handleChange,
        handleSubmit,
        SigninGoogle
    }

  return (
    <Login data={data}/>
  )
}

export default LoginContainer