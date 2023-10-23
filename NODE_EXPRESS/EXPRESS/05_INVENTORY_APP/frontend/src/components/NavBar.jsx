import { Link } from 'react-router-dom';

const NavBar = () => {
    

    const handleShowBar = () => {
      const navDisplay = document.querySelector('.nav-list').style
      console.log(navDisplay.display);
      if(navDisplay.display === ''){
            navDisplay.display = 'grid'
      }else{
            navDisplay.display = ''
      }
      
    }

    return (
        <nav className="nav">
            <div>
                <button
                    onClick={handleShowBar}
                    className="nav-btn">Menu
                </button>
            </div>
            <ul className="nav-list">
                <li><Link className="btn" to="/">Home</Link></li>
                <li><Link className="btn" to="/products">Products</Link></li>
                <li><Link className="btn" to="/brands">Brands</Link></li>
                <li><Link className="btn" to="/addPhone">Add Phone</Link></li>
                <li><Link className="btn" to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
