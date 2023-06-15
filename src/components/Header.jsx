import LogoImg from "../assets/img/Interio.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img width="67" src={LogoImg} alt="logo" />
        </div>
      </Link>
      <ul className="header__titles">
        <Link to="/furniture">
          <li>Furniture</li>
        </Link>
        <Link to="/notfound">
          <li>Interior Design</li>
        </Link>
        <Link to="/notfound">
          <li>Property</li>
        </Link>
        <Link to="/notfound">
          <li>Categories</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
