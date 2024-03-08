import './Navbar.css';
import logo from "./../../assets/logo.svg";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <h2>GeekFoods</h2>
      </div>

      <div className="menus">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/quotes" className={location.pathname === '/quotes' ? 'active' : ''}>Quotes</Link>
          </li>
          <li>
            <Link  to="/restaurants" className={location.pathname === '/restaurants' ? 'active' : ''}>Restaurants</Link>
          </li>
          <li>
            <Link to="/foods" className={location.pathname === '/foods' ? 'active' : ''}>Foods</Link>
          </li>
          <li>
            <Link to="/contact"  className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </div>

      <button>Get Started</button>
    </nav>
  );
}

export default Navbar;