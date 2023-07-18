import React from "react";

import { CartActiveContext } from "../App";
import { Link } from "react-router-dom";
import { CartItems } from "../components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Redux/Slices/cartSlice";

export const Cart = () => {
  const { setCartActive } = React.useContext(CartActiveContext);

  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const onClickClear = () => {
    if (window.confirm("To clean a shopping cart?")) {
      dispatch(clearItems());
    }
  };
  console.log(items.length);

  return (
    <div className="drawer">
      <Link to="/">
        <svg
          onClick={() => setCartActive(false)}
          className="cart__kreuz"
          width="50"
          height="50"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545525 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545525 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z"
            fill="#29795A"
          />
        </svg>
      </Link>

      {items.length > 0 ? (
        <Link to="/">
          <div className="buttons">
            <button className="buttons__korb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="27"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M18.75 45.8333C19.9006 45.8333 20.8333 44.9006 20.8333 43.75C20.8333 42.5994 19.9006 41.6667 18.75 41.6667C17.5994 41.6667 16.6666 42.5994 16.6666 43.75C16.6666 44.9006 17.5994 45.8333 18.75 45.8333Z"
                  stroke="#29795a"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.6667 45.8333C42.8173 45.8333 43.75 44.9006 43.75 43.75C43.75 42.5994 42.8173 41.6667 41.6667 41.6667C40.5161 41.6667 39.5834 42.5994 39.5834 43.75C39.5834 44.9006 40.5161 45.8333 41.6667 45.8333Z"
                  stroke="#29795a"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.08337 2.08334H10.4167L16 29.9792C16.1905 30.9383 16.7123 31.7999 17.4741 32.4131C18.2358 33.0263 19.189 33.3521 20.1667 33.3333H40.4167C41.3944 33.3521 42.3476 33.0263 43.1093 32.4131C43.8711 31.7999 44.3929 30.9383 44.5834 29.9792L47.9167 12.5H12.5"
                  stroke="#29795a"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Shopping cart
            </button>
            <button className="buttons__kassa">Zur Kasse</button>
          </div>
          <div className="title__korb">
            <h2>Shopping cart overview</h2>
            <div className="title__korb__summ">
              <h3>Subtotal:</h3>
              <h3>{totalPrice} $</h3>
            </div>
          </div>
          <div className="cartclear">
            <button onClick={onClickClear}>
              <svg
                width="18"
                height="18"
                id="Icons"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
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
              To clean a shopping cart
            </button>
          </div>

          <div className="items">
            {items.map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
          </div>
        </Link>
      ) : (
        <div className="cartempty">
          <p>Your cart is empty</p>
          <img
            width={350}
            height={350}
            src="https://i.ibb.co/6y5srrK/empty-cart.png"
            alt="cart is empty"
          />
          <Link to="/furniture">
            <button onClick={() => setCartActive(false)}>
              Back to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
