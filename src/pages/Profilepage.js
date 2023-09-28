import React from "react";
import Header from "../component/Header";
import "../styles/profile.css";
function Profilepage() {
  const options = [
    {
      label: "select category",
    },
    { label: "new arrival" },
    { label: "most popular" },
    { label: "trending" },
  ];
  function handleClick() {
    window.location.href = "../pages/Products";
  }
  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile">
          <div
            className="full-container"
            style={{ marginLeft: "0rem", marginRight: "5rem", width: "50%" }}
          >
            <div className="contenent">
              <h1 className="heading1">account settings</h1>
              <div className="form-container">
                <form className="form" action="">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="">product Name</label>
                    <input
                      type="text"
                      style={{ height: "4rem", width: "30rem" }}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="">discription</label>
                    <input
                      type="text"
                      style={{ height: "8rem", width: "30rem" }}
                    />
                  </div>
                  <div>
                    {" "}
                    <h1
                      style={{
                        marginTop: "1rem",
                        fontSize: "1.2rem",
                        marginBottom: "1rem",
                      }}
                    >
                      category
                    </h1>
                    <select
                      className="from-select"
                      style={{
                        width: "30rem",
                        marginLeft: "0rem",
                        marginTop: "0rem",
                      }}
                    >
                      {options?.map((option) => (
                        <option>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="row">
                    {" "}
                    <div className="form-group">
                      <label
                        htmlFor=""
                        style={{
                          width: "8rem",
                        }}
                      >
                        expiry date
                      </label>
                      <input type="date" />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginLeft: "0rem", marginRight: "20rem" }}
                    >
                      {" "}
                      <label
                        htmlFor=""
                        style={{
                          width: "8rem",
                        }}
                      >
                        units in stock
                      </label>
                      <input
                        type="text"
                        style={{
                          width: "12rem",
                          marginLeft: "0rem",
                          marginRight: "15rem",
                        }}
                      />
                    </div>
                  </div>
                </form>
                <button
                  type="submit"
                  style={{
                    width: "55rem",
                    height: "4rem",
                    marginLeft: "4.3rem",
                    marginTop: "33rem",
                  }}
                  className="btn1"
                  onClick={handleClick}
                >
                  add product now
                </button>
              </div>
            </div>
            <div
              className="avtar-container"
              style={{
                marginLeft: "0rem",
                marginTop: "5rem",
              }}
            >
              <div
                className="avtar-image"
                style={{ marginLeft: "15rem", marginTop: "8rem" }}
              >
                <img
                  src="https://t4.ftcdn.net/jpg/03/78/40/11/360_F_378401105_9LAka9cRxk5Ey2wwanxrLTFCN1U51DL0.jpg"
                  alt=""
                  width="350rem"
                />
              </div>
              <button
                type="submit"
                style={{ width: "22rem", marginLeft: "15rem" }}
                className="btn1"
              >
                upload product image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
