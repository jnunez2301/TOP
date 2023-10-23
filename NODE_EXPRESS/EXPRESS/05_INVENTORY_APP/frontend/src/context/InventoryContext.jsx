import InventoryData from '../helpers/InventoryData';

import { createContext } from "react";
import InventoryApp from '../InventoryApp';

export const Context = createContext(InventoryData);


const InventoryContext = () => {

  
  return (
    <>
        <Context.Provider value={InventoryData}>
            <InventoryApp/>
        </Context.Provider>
    </>
     )
}

export default InventoryContext