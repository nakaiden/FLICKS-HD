/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap.bundle.min.js / bootstrap.bundle.js '

const logo = require('./img/smF.png')

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src={logo} alt='logo'/> 
            <a className="navbar-brand">FLICKS-HD</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item ">Popular</a></li>
                            <li><a className="dropdown-item ">Top Rated</a></li>
                            <li><a className="dropdown-item ">View Count</a></li>
                            <li><a className="dropdown-item ">Action</a></li>
                            <li><a className="dropdown-item ">Animation</a></li>
                            <li><a className="dropdown-item ">Documentary</a></li>
                            <li><a className="dropdown-item ">Drama</a></li>
                            <li><a className="dropdown-item ">Family</a></li>
                            <li><a className="dropdown-item ">Mystery</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}