import React from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Slices/cartSlice";

function CartFurniture({ id, title, img, price, description }) {
  const dispatch = useDispatch();
  /* const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  ); */
  /* const addedCount = cartItem ? cartItem.count : 0; */

  const addIntoCart = () => {
    const item = {
      id,
      title,
      price,
      img,
      description,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="furniture__box__card">
      <img src={img} alt="furniture" />
      <div className="furniture__box__card__direction">
        <div className="furniture__box__card__direction__name">
          <h2>{title}</h2>
          <img
            width={120}
            height={22}
            src="https://i.ibb.co/Yjj388F/stars.png"
            alt=""
          />
        </div>
        <h3>Price : {price} $</h3>
        <span>Description</span>
        <p>{description}</p>
        <button onClick={addIntoCart}>add to cart</button>
      </div>
    </div>
  );
}

export default CartFurniture;
