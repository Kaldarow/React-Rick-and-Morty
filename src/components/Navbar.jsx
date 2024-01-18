import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <navbar className="navbar">
        <div className="logo">
          {" "}
          Hi <span>,</span> I'am Kanat Kaldarov
        </div>
        <nav>
          <Link to={""}>
            <a href="#About">Home</a>
          </Link>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <Link to={"/Rick"}>
            <a href="/projects">Projects</a>
          </Link>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
