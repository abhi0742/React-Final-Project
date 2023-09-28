import React, { useState } from "react";
import "../styles/login.css";

function Loginform() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));
    window.location.href = "../pages/Dashboard";
  }

  const Validation = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = " name required.";
    } else if (values.name.length < 5) {
      errors.name = " name must be more than 5 characters";
    }
    if (!values.password) {
      errors.password = " password required.";
    } else if (values.password.length < 5) {
      errors.password = " password must be more than 5 characters";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        <div className="loginform">
          <h1>Welcome to Dashboard, Login</h1>
          <form
            style={{ marginLeft: "0rem", marginRight: "5rem" }}
            action=""
            className="form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && (
              <p style={{ color: "white", fontSize: "1rem" }}>{errors.name}</p>
            )}

            <label htmlFor="">password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => handleChange(e)}
            />
            {errors.password && (
              <p style={{ color: "white", fontSize: "1rem" }}>
                {errors.password}
              </p>
            )}
            <button type="submit" className="btn">
              login
            </button>
            <button type="submit" className="btn">
              forgot your password?
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Loginform;
