import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">
          Router
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" href="#">
                <Link to="/albums">Albums</Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                <Link to="/new">New</Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
