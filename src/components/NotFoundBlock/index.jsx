import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <img src="InterioNotFound.png" alt="Not found" />
    </div>
  );
};

export default NotFoundBlock;
