import React from 'react';
import NavbarComponent from "../Components/NavbarComponent";
import AboutComponent from "../Components/AboutComponent";
import LinksComponent from "../Components/LinksComponent";
import LandingComponent from "../Components/LandingComponent";
import "./HomeContainer.css"

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
    }

    componentDidMount() {
    }

    render = () => (

        <div id="djf-HomeContainer-height">

            <LandingComponent/>


            <NavbarComponent/>

            <div className="container">

                <div className="d-flex flex-row justify-content-center">

                    <div className="d-flex flex-column">

                        <AboutComponent/>

                    </div>

                </div>
            </div>



        </div>



    );
}
export default HomeContainer;