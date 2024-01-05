import moment from "moment";
import styles from "./Divider.module.scss";

const Divider = ({ date }) => {
  const dateStr = moment(date).format("LL");
  return (
    <div className={styles.dashed_divider}>
      <div className={styles.divider_line}></div>
      <span className={styles.date}>{dateStr}</span>
      <div className={styles.divider_line}></div>
    </div>
  );
};
export default Divider;
