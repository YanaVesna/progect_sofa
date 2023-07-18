import React from "react";
import { CartActiveContext } from "../App";
import LogoImg from "../assets/img/Interio.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const { setCartActive } = React.useContext(CartActiveContext);
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
      <Link
        to="/cart"
        onClick={() => {
          setCartActive(true);
        }}
        className="header__card"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M18.75 45.8333C19.9006 45.8333 20.8333 44.9006 20.8333 43.75C20.8333 42.5994 19.9006 41.6667 18.75 41.6667C17.5994 41.6667 16.6666 42.5994 16.6666 43.75C16.6666 44.9006 17.5994 45.8333 18.75 45.8333Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.6667 45.8333C42.8173 45.8333 43.75 44.9006 43.75 43.75C43.75 42.5994 42.8173 41.6667 41.6667 41.6667C40.5161 41.6667 39.5834 42.5994 39.5834 43.75C39.5834 44.9006 40.5161 45.8333 41.6667 45.8333Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.08337 2.08334H10.4167L16 29.9792C16.1905 30.9383 16.7123 31.7999 17.4741 32.4131C18.2358 33.0263 19.189 33.3521 20.1667 33.3333H40.4167C41.3944 33.3521 42.3476 33.0263 43.1093 32.4131C43.8711 31.7999 44.3929 30.9383 44.5834 29.9792L47.9167 12.5H12.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="header__card__inround">
          <img
            width={15}
            height={15}
            className="header__card__inround__round"
            src="https://i.ibb.co/pKJQNFg/Ellipse222.png"
            alt="price"
          />

          <p>{totalCount}</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
