import React from 'react';
import NavbarComponent from "../Components/NavbarComponent";
import AboutComponent from "../Components/AboutComponent";
import LinksComponent from "../Components/LinksComponent";

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
    }

    componentDidMount() {
    }

    render = () => (

        <div>

            <NavbarComponent/>

            <div className="container-fluid">

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