import React from 'react';
import { Link} from "react-router-dom";
import websiteLogo from '../img/coffee-icon.png';

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={websiteLogo} height="50px" alt="BigCo Inc. logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Coffees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/orders">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/payments">Payments</Link>
                    </li>
                    <li className="nav-item align-right">
                        <Link className="nav-link" to="/jsondata">JSON Result</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}