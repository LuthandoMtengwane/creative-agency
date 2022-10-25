import React from "react";
import "../sass/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h2>iS.</h2>
      </div>
      <div className="hamburger">
        <h2 className="plus">+</h2>
      </div>
    </nav>
  );
};

export default Navbar;
