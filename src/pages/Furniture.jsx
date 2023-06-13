import React from "react";
/* import furniture from "../assets/furniture.json"; */
import CartFurniture from "../components/CartFurniture";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { CategoryContext, SearchContext } from "../App";

const Furniture = () => {
  const { searchValue } = React.useContext(SearchContext);
  const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

  const ellipses = [
    { categoryValue: "", img: "https://i.ibb.co/6NRXypZ/ellipse.png" },
    { categoryValue: "beds", img: "https://i.ibb.co/FKnh1rT/beds-ellipse.png" },
    {
      categoryValue: "cabinets",
      img: "https://i.ibb.co/89ndZw4/cabinets-ellipse.png",
    },
    {
      categoryValue: "chairs",
      img: "https://i.ibb.co/BcRdrF5/chairs-ellipse.png",
    },
    {
      categoryValue: "sofas",
      img: "https://i.ibb.co/g92tDy4/sofas-ellipse.png",
    },
  ];
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const categorys = categoryValue ? `category=${categoryValue}` : "";
    const search = searchValue ? `search=${searchValue}` : "";
    console.log(search);
    console.log(categorys);
    fetch(
      `https://64365ecf8205915d34f1b803.mockapi.io/items?page=${currentPage}&limit=6&${categorys}&${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [currentPage, searchValue, categoryValue]);

  const cartsFurniture = items
    .filter((obj) => {
      if (obj.category.toLowerCase().includes(categoryValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <CartFurniture key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="furniture">
      <div className="container">
        <div className="furniture__title">
          <div className="furniture__title__2">
            <h1>Cabinet in stylish disguise</h1>
          </div>
          <img
            srcSet="
             https://i.ibb.co/2cpz19R/image4-1170.png 1440w,
             https://i.ibb.co/HFQ8s7J/image4-900.png 1250w,
             https://i.ibb.co/Km4tCQL/image4-750.png 900w,
             https://i.ibb.co/wKYW5F5/image4-650.png 800w,
             https://i.ibb.co/hCFkY09/image4-550.png 700w,
             https://i.ibb.co/Tvm64PG/image4-450.png 550w,
             https://i.ibb.co/FnpqF5B/image4-350.png 450w,
             https://i.ibb.co/TYmjzBJ/image4-250.png 350w,"
            sizes="(max-width: 1170px) 1000px,
             (max-width: 1250px) 1150px,
             (max-width: 900px) 850px,
             (max-width: 750px) 650px,
             (max-width: 650px) 550px,
             (max-width: 550px) 450px,
             (max-width: 450px) 350px,
             (max-width: 350px) 300px,
             (max-width: 250px) 200px"
            src="https://i.ibb.co/2cpz19R/image4-1170.png"
            alt="-"
          />
        </div>
        <div className="furniture__tab">
          <div className="furniture__tab__ellipses">
            {ellipses.map((ell) => (
              <div
                key={ell.categoryValue}
                value={categoryValue}
                onClick={() => setCategoryValue(ell.categoryValue)}
                className="furniture__tab__ellipses__box"
              >
                <div className="furniture__tab__ellipses__box__round">
                  <img
                    className="furniture__tab__ellipses__box__round__1"
                    src={ell.img}
                    alt={`ellipse-${ell.categoryValue}`}
                  />
                  <div className="furniture__tab__ellipses__box__round__2"></div>
                </div>
                <p>{ell.categoryValue === "" ? "all" : ell.categoryValue}</p>
              </div>
            ))}
          </div>
          <Search />
        </div>
        <div className="furniture__box">
          {isLoading ? skeletons : cartsFurniture}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};

export default Furniture;
