import { FunctionComponent } from "react";
import styles from "./VideoFrame.module.css";

const VideoFrame: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <img className={styles.frameIcon} alt="" src="../frame-36373.svg" />
    </div>
  );
};

export default VideoFrame;
