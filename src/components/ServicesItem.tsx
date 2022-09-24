import { FunctionComponent } from "react";
import styles from "./ServicesItem.module.css";

type ServicesItemType = {
  title?: string;
  text?: string;
  icon?: string;
};

const ServicesItem: FunctionComponent<ServicesItemType> = ({
  title,
  text,
  icon,
}) => {
  return (
    <div className={styles.itemDiv}>
      <div className={styles.rectangleDiv} />
      <b className={styles.taskManagementB}>{title}</b>
      <div className={styles.theProcessOfManagingATask}>{text}</div>
      <button className={styles.readMoreBtn}>
        <div className={styles.readMoreDiv}>Read More</div>
        <img className={styles.vectorIcon} alt="" src="../vector-9.svg" />
      </button>
      <img className={styles.icon} alt="" src={icon} />
    </div>
  );
};

export default ServicesItem;
