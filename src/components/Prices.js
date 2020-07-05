import React from "react"
import tour1 from "../assets/img/price1.jpg"
import tour2 from "../assets/img/price2.jpg"
import tour3 from "../assets/img/price3.jpg"
const Prices = () => {
    return (
        <section id="prices">
            <div className="container animate">
                <div className="center">
                    <h1 className="heading">Price Plans</h1>
                </div>
                <div className="row flex-x-center">
                    <div className="col-3" style={{ padding: "10px" }}>
                        <div className="priceTable">
                            <div className="priceHeading">
                                <img src={tour1} alt="tour1" />
                                <div className="priceHeadingSection">
                                    <h3>London (UK)</h3>
                                </div>
                            </div>
                            <div className="priceBody">
                                <ul>
                                    <li>3 days tour</li>
                                    <li>upto 30 peoples</li>
                                    <li>Smart hotels</li>
                                    <li>Couples</li>
                                    <li>Extends: yes</li>
                                </ul>
                            </div>
                            {/* <div className="priceStatus">Hot</div> */}
                            <div className="priceBack">
                                <h2 className="priceNumber">$399.0</h2>
                                <div className="priceBtn">
                                    <a href="#" className="btn btn-white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" style={{ padding: "10px" }}>
                        <div className="priceTable">
                            <div className="priceHeading">
                                <img src={tour2} alt="tour1" />
                                <div className="priceHeadingSection">
                                    <h3>New York (USA)</h3>
                                </div>
                            </div>
                            <div className="priceBody">
                                <ul>
                                    <li>3 days tour</li>
                                    <li>upto 30 peoples</li>
                                    <li>Smart hotels</li>
                                    <li>Couples</li>
                                    <li>Extends: yes</li>
                                </ul>
                            </div>
                            <div className="priceBack">
                                <h2 className="priceNumber">$299.0</h2>
                                <div className="priceBtn">
                                    <a href="#" className="btn btn-white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" style={{ padding: "10px" }}>
                        <div className="priceTable">
                            <div className="priceHeading">
                                <img src={tour3} alt="tour1" />
                                <div className="priceHeadingSection">
                                    <h3>Paris (France)</h3>
                                </div>
                            </div>
                            <div className="priceBody">
                                <ul>
                                    <li>3 days tour</li>
                                    <li>upto 30 peoples</li>
                                    <li>Smart hotels</li>
                                    <li>Couples</li>
                                    <li>Extends: yes</li>
                                </ul>
                            </div>
                            <div className="priceBack">
                                <h2 className="priceNumber">$199.0</h2>
                                <div className="priceBtn">
                                    <a href="#" className="btn btn-white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices