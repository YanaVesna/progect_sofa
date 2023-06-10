import React from "react";
import furniture from "../assets/furniture.json";
import CartFurniture from "../components/CartFurniture";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { CategoryContext, SearchContext } from "../App";

const Furniture = () => {
  const { searchValue } = React.useContext(SearchContext);
  const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

  const ellipses = ["", "beds", "cabinets", "chairs", "sofas"];
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
             /image4_adaptation/image4_1170.png 1440w,
             /image4_adaptation/image4_900.png 1250w,
             /image4_adaptation/image4_750.png 900w,
             /image4_adaptation/image4_650.png 800w,
             /image4_adaptation/image4_550.png 700w,
             /image4_adaptation/image4_450.png 550w,
             /image4_adaptation/image4_350.png 450w,
             /image4_adaptation/image4_250.png 350w,"
            sizes="(max-width: 1170px) 1000px,
             (max-width: 1250px) 1150px,
             (max-width: 900px) 850px,
             (max-width: 750px) 650px,
             (max-width: 650px) 550px,
             (max-width: 550px) 450px,
             (max-width: 450px) 350px,
             (max-width: 350px) 300px,
             (max-width: 250px) 200px"
            src="/image4_adaptation/image4_1170.png"
            alt="-"
          />
        </div>
        <div className="furniture__tab">
          <div className="furniture__tab__ellipses">
            {ellipses.map((ell) => (
              <div
                key={ell}
                value={categoryValue}
                onClick={() => setCategoryValue(ell)}
                className="furniture__tab__ellipses__box"
              >
                <div className="furniture__tab__ellipses__box__round">
                  <img
                    className="furniture__tab__ellipses__box__round__1"
                    src={`/Ellipse/${ell}_ellipse.png`}
                    alt={`ellipse-${ell}`}
                  />
                  <div className="furniture__tab__ellipses__box__round__2"></div>
                </div>
                <p>{ell === "" ? "all" : ell}</p>
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
