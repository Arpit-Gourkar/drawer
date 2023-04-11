import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../../vectors/smblogo.jpg";
import head from "../header/head.css";
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row navbar-row">
          <div className="col-md-5 logo-box">
            <img src={logo1} class="img-fluid" id="logo" alt="..." />
          </div>
          <div className="col-md-7 logo-title">
            <h3 id="title-logo">SMb Techsolution</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
