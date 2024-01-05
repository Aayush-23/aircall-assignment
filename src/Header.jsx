import AircallLogo from "./assets/aircall.svg";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="header">
      <img src={AircallLogo} className="logo" alt="Aircall Logo" />
      <div className="header_tabs">
        <button
          className={`${activeTab === "inbox" ? "tab_active" : ""}`}
          onClick={() => setActiveTab("inbox")}
        >
          Inbox
        </button>
        <button
          className={`${activeTab === "all_calls" ? "tab_active" : ""}`}
          onClick={() => setActiveTab("all_calls")}
        >
          All Calls
        </button>
        <button className={`${activeTab === "settings" ? "tab_active" : ""}`}>
          <TuneOutlinedIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
