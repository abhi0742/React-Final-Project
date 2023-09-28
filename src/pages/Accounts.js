import React from "react";
import Header from "../component/Header";
import "../styles/account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Accounts() {
  const options = [
    {
      label: "select account",
    },
    { label: "admin" },
    { label: "editor" },
    { label: "merchant" },
    { label: "customer" },
  ];
  return (
    <div>
      <Header />
      <div>
        <div style={{ width: "90rem", padding: "1rem" }}>
          <div className="dropmenu">
            {" "}
            <div>
              <div className="contenent">
                <h1 className="heading">list of accounts</h1>
                <h1 className="heading">Accounts</h1>
              </div>
              <select className="from-select">
                {options?.map((option) => (
                  <option>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="full-container">
          <div className="avtar-container">
            <div className="avtar">
              <div className="contenent">
                <h1 className="heading1"> change avtar</h1>
              </div>
              <div className="avtar-image">
                <img
                  src="https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"
                  alt=""
                />
                <div className="overlay">
                  {" "}
                  <FontAwesomeIcon icon={faTrash} className="image" />
                </div>
              </div>
              <button
                type="submit"
                style={{ width: "22rem", marginLeft: "5rem" }}
                className="btn1"
              >
                upload new photo
              </button>
            </div>
          </div>
          <div className="acount-container">
            <div className="account">
              <div className="contenent">
                <h1 className="heading1">account settings</h1>
                <div className="form-container">
                  <form className="form" action="">
                    <div className="row">
                      {" "}
                      <div className="form-group">
                        {" "}
                        <label htmlFor="">Account Name</label>
                        <input type="text" />
                      </div>
                      <div className="form-group">
                        {" "}
                        <label htmlFor="">Account Email</label>
                        <input type="email" />
                      </div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="form-group">
                        <label htmlFor="">password</label>
                        <input type="password" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">reset password</label>
                        <input type="password" />
                      </div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="form-group">
                        <label htmlFor="">phone</label>
                        <input style={{ width: "19rem" }} type="phone" />
                      </div>
                      <button
                        type="submit"
                        style={{
                          height: "8%",
                          marginTop: "4rem",
                          marginLeft: "0rem",
                        }}
                        className="btn1"
                      >
                        update your profile
                      </button>
                    </div>
                    <button
                      type="submit"
                      style={{ width: "100%", marginLeft: "0rem" }}
                      className="btn1"
                    >
                      delete your account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
