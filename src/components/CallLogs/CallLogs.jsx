import { useEffect, useState } from "react";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import styles from "./CallLogs.module.scss";
import Divider from "../Divider";
import CallLog from "../CallLog";

const CallLogs = ({ activities, activeTab, moveLog, moveAllLogs }) => {
  return (
    <div className={styles.container}>
      {activeTab === "inbox" ? (
        <button className={styles.archieve_button} onClick={moveAllLogs(true)}>
          <ArchiveOutlinedIcon />
          Archive all calls
        </button>
      ) : (
        <button className={styles.archieve_button} onClick={moveAllLogs(false)}>
          <UnarchiveOutlinedIcon />
          Restore all calls
        </button>
      )}
      {Object.entries(activities).map(([key, value]) => (
        <>
          <Divider date={key} />
          <div className={styles.logs}>
            {value.map((activity) => (
              <CallLog
                activity={activity}
                key={activity.id}
                moveLog={moveLog}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default CallLogs;
