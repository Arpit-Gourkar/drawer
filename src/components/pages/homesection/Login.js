import React from "react";
import hom from "../homesection/hom.css";
import Header from "../header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import bgone from "../../vectors/background.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginnavigate = useNavigate();
  const handlelogin = () => {
    loginnavigate("/portalhome");
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row bgbox">
          {/* img-box */}
          <div className="col-md-6 reg-form">
            <img className="bgone" src={bgone} />
          </div>
          {/* login page box */}
          <div className="col-md-6 login-box">
            <h2>Login</h2>
            <form className="form-group login-form">
              <label>Email</label>
              <input id="lg-input" type="text" name="email" />
              <label>Password</label>

              <input id="lg-input" type="password" name="password" />
              <p className="late-join">Are you joining late today (12 PM)?</p>
              <button
                type="button"
                class="btn btn-primary login-btn"
                onClick={handlelogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
