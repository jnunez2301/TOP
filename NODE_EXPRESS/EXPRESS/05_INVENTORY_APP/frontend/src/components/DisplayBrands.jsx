import { useContext } from "react"
import { Context } from "../context/InventoryContext"

const DisplayBrands = () => {
    const value = useContext(Context);

    const brands = value().brands;

  return (
   <>
   <section className="info-section">
        <ul>
            {
                brands.length > 0 ?
                brands.map(brand => (
                    <li className="product" key={brand._id}>
                        <img
                        className="product-img"
                         src={brand.brandIMG} alt={brand.name} />
                        <div>
                            <p>{brand.name}</p>
                            <p>{brand.description}</p>
                          
                        </div>
                    </li>
                ))
                :
                'Loading...'
            }
        </ul>
   </section>
   </>
  )
}

export default DisplayBrands