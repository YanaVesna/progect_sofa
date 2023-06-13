import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <img
        src="https://i.ibb.co/pz5Ny9B/Interio-Not-Found.png"
        alt="Not found"
      />
    </div>
  );
};

export default NotFoundBlock;
