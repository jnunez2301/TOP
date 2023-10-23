import { Routes, Route } from 'react-router-dom';
import DisplayProducts from '../components/DisplayProducts';
import InventoryApp from '../InventoryApp';
import DisplayBrands from '../components/DisplayBrands';
import AddPhone from '../components/AddPhone';
import NavBar from '../components/NavBar';


const Router = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<InventoryApp />} />
          <Route path='/products' element={<DisplayProducts />} />
          <Route path='/brands' element={<DisplayBrands />} />
          <Route path='/addPhone' element={<AddPhone />} />


          <Route path='/*' element={<InventoryApp />} />
        </Routes>
     
    </>
  )
}

export default Router