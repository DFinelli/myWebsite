import React from "react";

import "./NavbarComponent.css";

const NavbarComponent = () =>

    <div className="row djf-navbar">

        <div className="col-6 djf-navbar-brand">
            djf
        </div>

        <div className="col-6  d-flex align-self-center justify-content-end djf-item ">
            <div className="row">
                <div className="col d">
                    <i className="fa fa-linkedin-square"/>
                </div>
                <div className="col">
                    <i className="fa fa-github"></i>
                </div>
            </div>
        </div>

    </div>


export default NavbarComponent