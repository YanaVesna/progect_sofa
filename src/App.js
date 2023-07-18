import React from "react";
import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Furniture from "./pages/Furniture.jsx";
import NotFound from "./pages/NotFound.jsx";

import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import { Cart } from "./pages/Cart";

export const CategoryContext = React.createContext();
export const SearchContext = React.createContext();
export const CartActiveContext = React.createContext();

function App(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("");
  const [cartActive, setCartActive] = React.useState(false);

  return (
    <div className="wrapper">
      <CartActiveContext.Provider value={{ setCartActive }}>
        <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
          <SearchContext.Provider
            value={{
              searchValue,
              setSearchValue,
            }}
          >
            <div className="content">
              <div
                style={
                  cartActive === true
                    ? { display: "flex" }
                    : { display: "none" }
                }
                className="overlay"
              >
                <Cart />
              </div>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/furniture" element={<Furniture />} />
                <Route path="/*" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/notfound" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </SearchContext.Provider>
        </CategoryContext.Provider>
      </CartActiveContext.Provider>
    </div>
  );
}

export default App;
