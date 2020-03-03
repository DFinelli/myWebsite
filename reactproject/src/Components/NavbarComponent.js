import React from "react";
import {Link} from "react-router-dom";

import "./NavbarComponent.css";

const NavbarComponent = () =>

    <div id="djf-nav-scroll-land" className="row djf-navbar">

        <div className="col-6 djf-navbar-brand">

            {/*set up proper Links*/}
            <div className="djf-navbar-a"
                 onClick={
                     () => {
                         const anchor = document.querySelector('#djf-LandingComponent');
                         anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }
                 }>
                djf
            </div>
        </div>

        <div className="col-6  d-flex align-self-center justify-content-end djf-item ">
            <div className="row">
                <div className="col d">
                    <a className="djf-navbar-a"
                       target="_blank"
                       href="https://www.linkedin.com/in/danielfinelli/">
                        <i className="fa fa-linkedin-square"/>
                    </a>
                </div>
                <div className="col">
                    <a className="djf-navbar-a"
                        target="_blank"
                       href="https://github.com/DFinelli">
                            <i className="fa fa-github"/>
                    </a>
                </div>
            </div>
        </div>

    </div>


export default NavbarComponent