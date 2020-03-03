// bootstrap carousel
import React from "react";
import NU from "../common/photos/NU.jpeg";
import Readings from "../common/photos/Readings.jpeg"
import Two from "../common/photos/Two.jpeg"

import "./BookComponent.css"


const BookComponent = () =>


    // <div className="container-fluid mt-4">

        <div className="mt-2 row d-flex justify-content-center d-sm-block d-md-none">

            <div className="col col-lg-8">


                <div id="djf-carousel-hold">
                        <div className="carousel slide" data-ride="carousel" data-interval="6000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 img-fluid" src={Two} alt="1"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid" src={Readings} alt="2"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid" src={NU} alt="3"/>
                                </div>
                            </div>
                        </div>
                </div>

            </div>


        </div>



    // </div>












export default BookComponent
