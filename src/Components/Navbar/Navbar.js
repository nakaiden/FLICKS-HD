import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap.bundle.min.js / bootstrap.bundle.js '

const logo = require('./img/smF.png')

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src={logo} /> <a className="navbar-brand" href="#">FLICKS-HD</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item " href="#">Popular</a></li>
                            <li><a className="dropdown-item " href="#">Top Rated</a></li>
                            <li><a className="dropdown-item " href="#">View Count</a></li>
                            <li><a className="dropdown-item " href="#">Action</a></li>
                            <li><a className="dropdown-item " href="#">Animation</a></li>
                            <li><a className="dropdown-item " href="#">Documentary</a></li>
                            <li><a className="dropdown-item " href="#">Drama</a></li>
                            <li><a className="dropdown-item " href="#">Family</a></li>
                            <li><a className="dropdown-item " href="#">Mystery</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}