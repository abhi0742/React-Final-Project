import React from "react";

function Card(item) {
  return (
    <div>
      {
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            gap: "2rem",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            style={{
              borderRadius: "100%",
              width: "8rem",
              height: "8rem",
              padding: "1rem",
            }}
            src={item.data.pic}
            alt=""
          />
          <div className="message">
            {" "}
            <p>{item.data.message}</p>
            <p>{item.data.time}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Card;
