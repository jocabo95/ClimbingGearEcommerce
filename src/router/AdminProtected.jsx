import { useContext } from "react"
import { AuthContext } from "../components/context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const AdminProtected = () => {

    const {user} = useContext(AuthContext)

    const adminRole = import.meta.env.VITE_ADMINROLE

  return (
    <>
        {
           user.rol === adminRole ? <Outlet/> : <Navigate to="/"/>
        }
    </>
  )
}

export default AdminProtected