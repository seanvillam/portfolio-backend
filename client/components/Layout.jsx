import React from "react";
import favicon from "../public/favicon.svg";
import { Link } from "react-router-dom";

export default function Layout(){
     return (
    // This component is used to display the header and navigation links on all pages
    <>
      <img src={favicon} alt="Logo" style={{ width: "100px", height: "100px" }} />
      <h1>Sean Villamonte</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/project">Project</Link> | <Link to="/services">Services</Link> |{" "}
        <Link to="/references">References</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </>
  );
}