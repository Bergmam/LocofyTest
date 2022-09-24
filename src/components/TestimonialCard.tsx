import { FunctionComponent } from "react";
import styles from "./TestimonialCard.module.css";

type TestimonialCardType = {
  name?: string;
  text?: string;
  location?: string;
  image?: string;
};

const TestimonialCard: FunctionComponent<TestimonialCardType> = ({
  name,
  text,
  location,
  image,
}) => {
  return (
    <div className={styles.card01Div}>
      <div className={styles.baseDiv} />
      <div className={styles.locationDiv}>{location}</div>
      <b className={styles.nameB}>{name}</b>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.textDiv}>{text}</div>
      <img className={styles.reviewIcon} alt="" src="../review.svg" />
    </div>
  );
};

export default TestimonialCard;
