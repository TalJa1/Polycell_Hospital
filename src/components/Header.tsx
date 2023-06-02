import React from "react";
import "../styles/Header.css";
import logo from "../assets/imgs/logo51.png";

interface HeaderProps {
  title: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <div className="header-container">
        <h1 className="header-title">{props.title}</h1>
        {props.imageUrl == null ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            className="header-image"
            src={props.imageUrl}
            alt="Header Image"
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            style={{ marginLeft: "auto", backgroundColor: "black"}}
            className="header-image"
            src={logo}
            alt="Header Image"
          />
        )}
      </div>
      <hr className="hr-style" />
    </div>
  );
};

export default Header;
