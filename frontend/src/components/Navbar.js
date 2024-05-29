import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.css"

const Navbar = () => {
    return (
        <div id="navbar" className="container-fluid">
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark" role="navigation">
                <span className="navbar-brand mb-0 h1">Affordable Housing</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to='/' className={"nav-link"}>
                        Home
                        </NavLink> <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/Histogram' className={"nav-link"}>
                            Histogram
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/WordCloud' className={"nav-link"}>
                            Word Cloud
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/About' className={"nav-link"}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Accessibility
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <label className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="AcessibilityCheckBox1" />
                                        <label className="form-check-label" htmlFor="CheckBox1">Accessibility Option 1</label>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="AcessibilityCheckBox2" />
                                        <label className="form-check-label" htmlFor="CheckBox1">Accessibility Option 2</label>
                                    </div>
                                </label>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <label className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="AcessibilityCheckBox3" />
                                        <label className="form-check-label" htmlFor="CheckBox1">Accessibility Option 3</label>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="AcessibilityCheckBox4" />
                                        <label className="form-check-label" htmlFor="CheckBox1">Accessibility Option 4</label>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;