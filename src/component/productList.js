import React from "react";
import "../styles/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function ProductList({ storage }) {
  function handleClick() {
    window.location.href = "../pages/Profilepage";
  }
  return (
    <div className="contain">
      <div className="whole">
        {" "}
        <div>
          <table className="table">
            <tr style={{ borderBottom: "1px solid black" }}>
              <th>Product Name</th>
              <th>unit sold</th>
              <th>in stock </th>
              <th>expiry date</th>
            </tr>
            {storage?.map((val, key) => {
              return (
                <tr style={{ borderBottom: "1px solid black" }} key={key}>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.name}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.unitSold}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.stock}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {val.expireDate}
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTrash} className="image" />
                  </td>
                </tr>
              );
            })}
          </table>
          <button type="submit" onClick={handleClick} className="btn1">
            add new products
          </button>
          <button type="submit" className="btn1">
            delete selected products
          </button>
        </div>
        <div></div>
      </div>
      <div className="whole1">
        {" "}
        <div>
          <table className="table1">
            <tr>
              <th>Product Category</th>
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
                    {val.category}
                  </td>

                  <td>
                    <FontAwesomeIcon icon={faTrash} className="image" />
                  </td>
                </tr>
              );
            })}
          </table>
          <button
            type="submit"
            style={{ width: "15rem", marginLeft: "3rem" }}
            className="btn1"
          >
            add new category
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductList;
