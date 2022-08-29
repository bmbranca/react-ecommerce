import React, { useState } from "react";
import TcModal from "../components/TcModal";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
    if (values.password) {
      setValid(true);
    }
  };

  const handlePasswordInputChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
    if (values.email) {
      setValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const openModal = () => {
    console.log("clicked");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("clicked");
    setModalIsOpen(false);
  };

  return (
    <>
      <header>
        <h2>한국의 이미지</h2>
      </header>
      <div className="LoginWrapper">
        {modalIsOpen ? (
          <TcModal onClick={closeModal} />
        ) : (
          <div className="form-container">
            <h2 className="loginTitle">한국의 이미지</h2>

            <form Name="register-form" onSubmit={handleSubmit}>
              <input
                onChange={handleEmailInputChange}
                value={values.email}
                id="email"
                className="form-field"
                type="text"
                placeholder="email"
                name="email"
              />
              {submitted && !values.password ? (
                <span id="first-name-error">Please enter your email</span>
              ) : null}
              <input
                onChange={handlePasswordInputChange}
                value={values.password}
                id="email"
                className="form-field"
                type="text"
                placeholder="password"
                name="password"
              />
              {submitted && !values.email ? (
                <span id="first-name-error">Please enter your password</span>
              ) : null}

              {valid ? (
                <div className="buttonCase">
                  <Link to="/images">
                    <button>Login</button>
                  </Link>
                </div>
              ) : (
                <div className="buttonCase">
                  <Link to="/">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </form>

            <div className="termsAndConditions">
              By logging in, I agree to the{" "}
              <span className="tAndC" onClick={openModal}>
                terms and conditions
              </span>{" "}
              and choose to receive emails about 한국의 이미지 news, promotions,
              and offers.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
