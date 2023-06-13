import React from "react";
import Yellow from "../assets/img/yellow.png";
import Categories from "../components/Categories.jsx";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="Interier-foto">
        <div className="Interier-foto__title">
          <h1>Discover The Best Furniture for You!</h1>
          <img src={Yellow} alt="#" />
          <Button />
        </div>
      </div>
      <div className="container">
        <div className="content__box">
          <div className="content__box__text">
            <h1 className="content__title">Shop Popular Categories</h1>
            <Link to="/furniture">
              <b>See All</b>
            </Link>
          </div>
          <img src={Yellow} alt="#" />
        </div>
        <div className="content_img">
          <Categories />
        </div>
        <div className="content__simple_bads">
          <img
            width={644}
            height={425}
            src="https://i.ibb.co/C8Z515j/image2.png"
            alt="badroom"
          />
          <div className="content__simple_bads__direction">
            <h1>Shop Popular Categories</h1>
            <p>
              Enjoy your weekends with your families using our lastest Simple
              Bed set!
            </p>
            <Button />
          </div>
        </div>
        {/* <div className="content__discount">
          <div className="content__discount__direction">
            <h2>Get Discount up to 50% off Today!</h2>
            <Button />
          </div>
          <img src="/image3.png" alt="badroom" />
        </div> */}
      </div>
    </>
  );
};

export default Home;
