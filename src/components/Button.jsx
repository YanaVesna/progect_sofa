import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/notfound">
      <button className="ButtonYellow">Explore All Product</button>
    </Link>
  );
};

export default Button;
