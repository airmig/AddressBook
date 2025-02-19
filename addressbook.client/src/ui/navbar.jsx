import React from "react";
import {Link} from 'react-router-dom';
function NavBar(){
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">AddressBook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Actions
            </a>
            <ul className="dropdown-menu">
              <li>
              <Link className="dropdown-item" to="/">Home</Link>
              </li>
              <li><hr className="dropdown-divider"/></li>
              <li>
              <Link className="dropdown-item" to="/contacts">Contact List</Link>
              </li>
              <li><hr className="dropdown-divider"/></li>
              <li>
              <Link className="dropdown-item" to="/create">Create Contact</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}
export default NavBar;