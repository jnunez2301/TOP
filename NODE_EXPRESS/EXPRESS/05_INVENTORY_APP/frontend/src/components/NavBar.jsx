import  { useState } from 'react';

const NavBar = () => {
    const [navDisplay, setNavDisplay] = useState('grid');

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
                <li><a className="btn" href="#">Home</a></li>
                <li><a className="btn" href="#">Products</a></li>
                <li><a className="btn" href="#">Brands</a></li>
                <li><a className="btn" href="#">Add Phone</a></li>
                <li><a className="btn" href="#">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
