import { BrowserRouter, Routes, Route } from "react-router-dom"
import Clock from "../components/Clock"
import Tarea2 from "../components/Tarea2"
import Tarea3 from "../components/Tarea3"
import MensajeId from "../components/MensajeId"
import Error from "../components/Error"


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Clock />}/>
        <Route path="/tarea2"  element={<Tarea2 />}/>
        <Route  path="/tarea3" element={ <Tarea3 />}/>
        <Route path="/tarea3/:id" element={<MensajeId/>} />
        
        <Route path="/*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes