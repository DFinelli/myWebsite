import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import HomeContainer from "./HomeContainer"
import AboutComponent from "../Components/AboutComponent";
import "./RoutingContainer.css"

class RoutingContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
    }

    componentDidMount() {
    }

    render = () => (

        <div id="djf-RoutingContainer-height">

            <Router>

                <Route
                    path="/"
                    exact={true}
                    render={
                        (props) => <HomeContainer
                            {...props}
                        />
                    }
                />

                <Route
                    path="/about"
                    exact={true}
                    render={
                        (props) => <AboutComponent
                            {...props}
                        />
                    }
                />



            </Router>





        </div>


    );


}

export default RoutingContainer;
