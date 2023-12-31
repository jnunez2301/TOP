import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../components/MainPage"
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import SuccessRegister from "../auth/SuccessRegister"
import ErrorRegister from "../auth/ErrorRegister"
import ProfilePage from "../auth/ProfilePage"
import NavBar from "../components/NavBar"
import { useAuth } from "../context/AuthContext"





const MessagesRoutes = () => {

  const { isAuthenticated } = useAuth();
 

  
  return (
    <>
    <BrowserRouter>
        {isAuthenticated ? <NavBar /> : ''}
        <Routes>
          
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/success' element={<SuccessRegister />} />
          <Route path='/error' element={<ErrorRegister />}/>       
          <Route path="/user/:username" element={<ProfilePage />} />
      

          <Route path="/*" element={<MainPage/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default MessagesRoutes