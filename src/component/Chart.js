import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import axios from "axios";
import PieChart from "./PieChart";
import LineChart from "./LineChar";
import BarChart from "./BarChart";
import NotificationList from "./notificationList";
import OrderList from "../component/OrderList";
function Chart() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
      );
      setData(response.data);
    })();
  }, []);
  return (
    <>
      <div className="dashboard">
        <h1>welcome back , admin</h1>
        <div className="chart">
          <div>
            <LineChart storage={data?.dasbhoardPage?.latestHits} />
          </div>
          <div>
            <BarChart storage={data?.dasbhoardPage?.performance} />
          </div>
          <div>
            <PieChart storage={data?.dasbhoardPage?.storage} />
          </div>
          <div>
            <NotificationList storage={data?.dasbhoardPage?.notifications} />
          </div>
        </div>
        <OrderList storage={data?.dasbhoardPage?.orders} />
      </div>
    </>
  );
}

export default Chart;
