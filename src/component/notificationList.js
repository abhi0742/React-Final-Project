import React from "react";

import Card from "./card";
function NotificationList({ storage }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(67, 92, 112)",
        height: "30rem",
        width: "40rem",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ marginLeft: "3rem", marginTop: "0rem" }}>
        Notification list
      </h1>
      {storage?.map((item) => {
        return (
          <div
            style={{
              marginLeft: "2rem",
              backgroundColor: "rgb(78,101,122)",
              width: "90%",
              height: "8rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default NotificationList;
