import './Header.css'
import logo from "./../../assets/logo.svg";

function Header() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <h2>GeekFoods</h2>
      </div>

      <div className="menus">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Quote</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Foods</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <button>Get Started</button>
    </nav>
  );
}

export default Header;