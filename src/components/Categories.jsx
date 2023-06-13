import React from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../App";

function Categories() {
  const categories = [
    { category: "Beds", img: "https://i.ibb.co/g9HxT4z/black-wite-1.png" },
    { category: "Chairs", img: "https://i.ibb.co/9W4p2yB/black-wite-2.png" },
    { category: "Cabinets", img: "https://i.ibb.co/5Yq5JzQ/black-wite-3.png" },
    { category: "Sofas", img: "https://i.ibb.co/7tKTKKc/black-wite-4.png" },
  ];
  const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

  return (
    <div className="categories">
      <ul>
        {categories.map((object, i) => (
          <Link to="/furniture">
            <li
              key={i}
              onClick={() => setCategoryValue(object.category)}
              className={categoryValue === object.category ? "active" : ""}
            >
              <img src={object.img} alt="catigories" />

              <h2>{object.category}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
