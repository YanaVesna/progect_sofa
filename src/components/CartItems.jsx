import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../Redux/Slices/cartSlice";

export const CartItems = ({ id, title, description, price, count, img }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cartItem">
      <img width={140} height={100} src={img} alt="your choise" />
      <div className="cartItem__textblock">
        <div className="cartItem__textblock__b">
          <span>{title}</span>
          <p>{description}</p>
          <div className="cartItem__textblock__b__price">
            <h4>
              <span>price:</span> {price} $
            </h4>
            <h4>
              <span>totalprice:</span> {price * count} $
            </h4>
          </div>
        </div>
        <div className="cartItem__textblock__btn">
          <div
            onClick={onClickMinus}
            className="button button--outline button--circle cart__item-count-minus"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              ></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              ></path>
            </svg>
          </div>
          <b>{count}</b>
          <div
            onClick={onClickPlus}
            className="button button--outline button--circle cart__item-count-plus"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              ></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              ></path>
            </svg>
          </div>
        </div>
        <div onClick={onClickDelete} className="cart__delete">
          <svg
            width="30"
            height="30"
            id="Icons"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="cls-1"
              d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z"
            />
            <path
              className="cls-1"
              d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"
            />
            <path
              className="cls-1"
              d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"
            />
            <path
              className="cls-1"
              d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
