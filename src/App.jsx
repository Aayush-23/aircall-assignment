import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import CallLogs from "./components/CallLogs/CallLogs.jsx";
import ControlBar from "./components/ControlBar";
import { fetchActivitiesApi, moveActivityApi } from "./api.js";

const App = () => {
  const [activeTab, setActiveTab] = useState("inbox");
  const [activities, setActivities] = useState([]);

  const formatLogs = (data) => {
    return data
      .sort(
        (a, b) =>
          new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
      )
      .reduce((acc, activity) => {
        const date = activity.created_at;
        if (acc[date]) {
          acc[date].push(activity);
        } else {
          acc[date] = [activity];
        }
        return acc;
      }, {});
  };

  const fetchCallLogs = async () => {
    try {
      const response = await fetchActivitiesApi();
      const data = await response.json();

      setActivities(data);
    } catch (err) {
      console.log(err);
    }
  };

  const moveLog = (activity) => async () => {
    try {
      const response = await moveActivityApi(activity.id, activity.is_archived);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const moveAllLogs = (value) => async () => {
    const getMoveLogsPromise = () => {
      const success = [],
        failed = [];
      return new Promise((resolve) => {
        activities.forEach(async (activity) => {
          try {
            const response = await moveActivityApi(activity.id, value);
            if (response.ok) {
              success.push(activity.id);
            } else {
              failed.push(activity.id);
            }
          } catch (err) {
            failed.push(activity.id);
          } finally {
            if (success.length + failed.length === activities.length) {
              resolve({ success, failed });
            }
          }
        });
      });
    };

    const { success } = await getMoveLogsPromise();

    const updatedData = activities.map((activity) => {
      if (success.includes(activity.id)) {
        activity.is_archived = value;
      }
      return activity;
    });
    setActivities(updatedData);
  };

  useEffect(() => {
    fetchCallLogs();
  }, []);
  const logs =
    activeTab === "inbox"
      ? formatLogs(activities.filter((activity) => !activity.is_archived))
      : formatLogs(activities);
  return (
    <div id="app">
      <div className="container">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <CallLogs
          activities={logs}
          activeTab={activeTab}
          moveLog={moveLog}
          moveAllLogs={moveAllLogs}
        />
        <ControlBar />
      </div>
    </div>
  );
};

export default App;
