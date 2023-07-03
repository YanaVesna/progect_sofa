import React from "react";
import { Link } from "react-router-dom";
/* import { CategoryContext } from "../App"; */
import { useDispatch, useSelector } from "react-redux";
import { setCategoryValue } from "../Redux/Slices/filterSlice";

function Categories() {
  const categories = [
    { category: "beds", img: "https://i.ibb.co/g9HxT4z/black-wite-1.png" },
    { category: "chairs", img: "https://i.ibb.co/9W4p2yB/black-wite-2.png" },
    { category: "cabinets", img: "https://i.ibb.co/5Yq5JzQ/black-wite-3.png" },
    { category: "sofas", img: "https://i.ibb.co/7tKTKKc/black-wite-4.png" },
  ];
  /* const { categoryValue, setCategoryValue } = React.useContext(CategoryContext); */

  const dispatch = useDispatch();
  const categoryValue = useSelector((state) => state.filter.categoryValue);

  return (
    <div className="categories">
      <ul>
        {categories.map((object, i) => (
          <Link to="/furniture" key={i}>
            <li
              key={i}
              onClick={() => dispatch(setCategoryValue(object.category))}
              className={categoryValue === object.category ? "active" : ""}
            >
              <img src={object.img} alt="catigories" key={i} />

              <h2>{object.category}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
