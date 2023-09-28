import React from "react";

function OrderList({ storage }) {
  console.log(storage);
  return (
    <div
      style={{
        width: "82rem",
        height: "15rem",
        backgroundColor: "rgb(67,92,112)",
        marginTop: "5rem",
        marginLeft: "12rem",
        overflowY: "scroll",
      }}
    >
      <div>
        <h1
          style={{
            margin: "2rem",
            fontSize: "1.5rem",
          }}
        >
          OrderList
        </h1>
        <div>
          <table
            style={{
              border: "1px solid rgb(78,101,122)",
              width: "100%",
              height: "100%",
              fontSize: "1.2rem",
              backgroundColor: "rgb(67,92,112)",
            }}
          >
            <tr>
              <th>orderNo</th>
              <th>status</th>
              <th>operators </th>
              <th>location</th>
              <th>distance</th>
              <th>startDate</th>
              <th> Est deliveryDate</th>
            </tr>
            {storage?.map((val, key) => {
              return (
                <tr key={key}>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.orderNo}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.operators}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.location}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.distance}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.startDate}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.status}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.deliveryDate}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
