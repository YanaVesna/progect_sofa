import React from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../App";

function Categories() {
  const categories = ["Beds", "Chairs", "Cabinets", "Sofas"];
  const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <Link to="/furniture">
            <li
              key={i}
              onClick={() => setCategoryValue(categoryName)}
              className={categoryValue === categoryName ? "active" : ""}
            >
              <img
                src={`/black_wite/black_wite_${i + 1}.png`}
                alt="catigories"
              />
              <h2>{categoryName}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
