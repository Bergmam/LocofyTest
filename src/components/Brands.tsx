import { FunctionComponent } from "react";
import styles from "./Brands.module.css";

const Brands: FunctionComponent = () => {
  return (
    <div className={styles.brandsDiv}>
      <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
      <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
      <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
      <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
      <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
    </div>
  );
};

export default Brands;
