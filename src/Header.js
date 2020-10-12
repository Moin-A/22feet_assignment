import React from "react";
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <nav className="navbar  sticky-top  navbar-expand-lg navbar-light navbar-dark bg-dark" style={{backgroundColor:"#854f15"}}>
      <ul  >
        <li><img src="adjust-solid.svg" alt="name" className="svg"></img></li>
        <li><Link className="btn btn-primary" to="/home">Home</Link ></li>
        <li><Link className="btn btn-primary" to="/Store">Locate A Store</Link></li>
      </ul>
    </nav>
  );
}
