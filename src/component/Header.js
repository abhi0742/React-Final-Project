import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1>PRODUCT ADMIN</h1>
      </div>
      <div>
        <ul className="content">
          <Link className="link" to="/pages\Dashboard">
            dashboard
          </Link>
          <Link className="link">
            reports{" "}
            <select value="" className="menu">
              <div>
                <option>daily reports</option>
                <option>weekly reports</option>
                <option>yearly reports</option>
              </div>
            </select>
          </Link>
          <Link className="link" to="/pages\Products">
            products
          </Link>
          <Link className="link" to="/pages\Accounts">
            accounts
          </Link>
          <Link className="link">
            settings
            <select value="" className="menu">
              <div>
                <option>daily reports</option>
                <option>weekly reports</option>
                <option>yearly reports</option>
              </div>
            </select>
          </Link>
        </ul>
      </div>
      <div className="login">
        <Link className="link" to="/">
          Admin ,logout
        </Link>
      </div>
    </div>
  );
}

export default Header;
