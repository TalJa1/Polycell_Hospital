import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menubar.css";

const Menubar = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="rootMenubar">
      <button onClick={toggleMenu}>Menu</button>
      {toggle && (
        <nav className="containerMenubar">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </nav>
      )}
    </div>
  );
};

export default Menubar;
