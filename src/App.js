import React from "react";
import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Furniture from "./pages/Furniture.jsx";
import NotFound from "./pages/NotFound.jsx";

import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.jsx";

export const CategoryContext = React.createContext();
export const SearchContext = React.createContext();

function App(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("");

  return (
    <div className="wrapper">
      <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
        <SearchContext.Provider
          value={{
            searchValue,
            setSearchValue,
          }}
        >
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/*" element={<Home />} />
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </SearchContext.Provider>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
