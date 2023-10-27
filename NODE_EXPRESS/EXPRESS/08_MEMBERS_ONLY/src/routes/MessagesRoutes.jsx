import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../components/MainPage"
import Login from "../auth/Login"
import Signup from "../auth/Signup"



const MessagesRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default MessagesRoutes