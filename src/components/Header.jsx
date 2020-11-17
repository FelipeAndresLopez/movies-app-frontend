import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Header.scss";

import logo from "../assets/static/logo.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <div className="container-fluid">
    <header className="row justify-content-between align-items-center header">
      <div className="col-4">
        <Link to="/">
          <img className="header__img" src={logo} alt="Videocamera icon" />
        </Link>
      </div>

      <div className="col-2">
        <div className="header__menu ">
          <div className="header__menu--profile">
            <img src={userIcon} alt="" />
            <p className="d-none d-sm-block">Perfil</p>
          </div>
          <ul>
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
