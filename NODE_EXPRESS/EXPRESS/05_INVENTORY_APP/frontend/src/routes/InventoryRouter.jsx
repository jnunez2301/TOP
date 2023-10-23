import { Routes, Route } from 'react-router-dom';
import DisplayProducts from '../components/DisplayProducts';
import InventoryApp from '../InventoryApp';
import DisplayBrands from '../components/DisplayBrands';


const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<InventoryApp />} />
        <Route path='/products' element={<DisplayProducts />} />
        <Route path='/brands' element={<DisplayBrands />} />


        <Route path='/*' element={<InventoryApp />} />
      </Routes>
    </>
  )
}

export default Router