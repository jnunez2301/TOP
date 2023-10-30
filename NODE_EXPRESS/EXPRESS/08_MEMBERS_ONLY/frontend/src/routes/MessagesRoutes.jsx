import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../components/MainPage"
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import SuccessRegister from "../auth/SuccessRegister"



const MessagesRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/success' element={<SuccessRegister />} />

          <Route path="/*" element={<MainPage/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default MessagesRoutes