import React from "react"
import { DiAndroid, DiSwift, DiNodejsSmall, DiReact } from "react-icons/di"
// import { globalContext } from "../Context/globalContext"
const Services = () => {
    return (
        <div id="services">
            <div className="container servicesContent">
                <div className="center">
                    <h1 className="heading">Our Services</h1>
                </div>
                <div className="row animate">
                    <div className="col-3 p25">
                        <div className="service">
                            <div className="serviceIcon">
                                <DiAndroid className="android icon" />
                            </div>
                            <div className="serviceHeading">
                                <h3>Android Apps</h3>
                            </div>
                            <div className="service-info">
                                <p>We are providing high quality mobile development services to our client so you can hire our developers</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 p25">
                        <div className="service">
                            <div className="serviceIcon">
                                <DiSwift className="swift icon" />
                            </div>
                            <div className="serviceHeading">
                                <h3>IOS Apps</h3>
                            </div>
                            <div className="service-info">
                                <p>We are providing high quality mobile development services to our client so you can hire our developers</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 p25">
                        <div className="service">
                            <div className="serviceIcon">
                                <DiNodejsSmall className="node icon" />
                            </div>
                            <div className="serviceHeading">
                                <h3>Node Websites</h3>
                            </div>
                            <div className="service-info">
                                <p>We are providing high quality mobile development services to our client so you can hire our developers</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 p25">
                        <div className="service">
                            <div className="serviceIcon">
                                <DiReact className="icon react" />
                            </div>
                            <div className="serviceHeading">
                                <h3>React JS</h3>
                            </div>
                            <div className="service-info">
                                <p>We are providing high quality mobile development services to our client so you can hire our developers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;