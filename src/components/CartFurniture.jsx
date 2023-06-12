import React from "react";

function CartFurniture({
  id,
  category,
  title,
  img,
  price,
  description,
  rating,
}) {
  return (
    <div className="furniture__box__card">
      {/* <img src={`/${category}/${category}_${id + 1}.png`}  */}
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
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default CartFurniture;
