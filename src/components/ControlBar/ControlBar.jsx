import styles from "./ControlBar.module.scss";
import CallIcon from "@mui/icons-material/Call";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import DialpadIcon from "@mui/icons-material/Dialpad";
const ControlBar = () => {
  return (
    <div className={styles.control_bar}>
      <CallIcon className={styles.active} />
      <PersonOutlineIcon />
      <div className={styles.dialpad_icon_outer}>
        <div className={styles.dialpad_icon}>
          <DialpadIcon fontSize="large" />
        </div>
      </div>
      <SettingsIcon />
      <div className={styles.status_icon}>
        <div></div>
      </div>
    </div>
  );
};

export default ControlBar;
