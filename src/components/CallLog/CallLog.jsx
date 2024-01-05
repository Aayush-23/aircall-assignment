import styles from "./CallLog.module.scss";
import IncomingCallSvg from "./../../assets/incomingCall.svg";
import MissedCallSvg from "./../../assets/missedCall.svg";
import VoicemailSvg from "./../../assets/voicemail.svg";

const svgs = {
  answered: IncomingCallSvg,
  voicemail: VoicemailSvg,
  missed: MissedCallSvg,
};
import moment from "moment";

const CallLog = ({ activity, moveLog }) => {
  const date = moment(activity.created_at);
  return (
    <div
      className={styles.call_log}
      key={activity.id}
      onDoubleClick={moveLog(activity)}
    >
      <div className={styles.call_log__icon}>
        <img src={svgs[activity.call_type]} />
      </div>
      <div className={styles.call_details}>
        <div className={styles.contact_number}>{activity.from}</div>
        <div className={styles.helper_text}>tried to call on {activity.to}</div>
      </div>
      <div className={styles.call_log__time}>
        {`${date.format("hh")}:${date.format("mm")}`}
        <span>{date.format("A")}</span>
      </div>
    </div>
  );
};

export default CallLog;
