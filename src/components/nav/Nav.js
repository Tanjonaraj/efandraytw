import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/logo.png";
import Profil from "./../../images/Profil.jpg";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navigateur">
          <img src={logo}></img>
        </div>
        <div className="menu">
          <h3>Menu</h3>
        </div>
        <div className="navigateur"></div>
        <div className="navigateur"></div>
      </div>
    );
  }
}
