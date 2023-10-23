import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [navDisplay, setNavDisplay] = useState('flex');

    const handleShowBar = () => {
        if (navDisplay === 'none' || !navDisplay) {
            setNavDisplay('grid');
        } else {
            setNavDisplay('none');
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
            <ul className="nav-list" style={{ display: navDisplay }}>
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
