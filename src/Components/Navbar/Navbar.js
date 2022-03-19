import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">FLICKS-HD</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categories</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Popular</a></li>
                            <li><a class="dropdown-item" href="#">Top Rated</a></li>
                            <li><a class="dropdown-item" href="#">View Count</a></li>
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Animation</a></li>
                            <li><a class="dropdown-item" href="#">Documentary</a></li>
                            <li><a class="dropdown-item" href="#">Drama</a></li>
                            <li><a class="dropdown-item" href="#">Family</a></li>
                            <li><a class="dropdown-item" href="#">Mystery</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            </div>
        </div>
    </nav>
}