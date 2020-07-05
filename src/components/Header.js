import React from "react"
import video from "../assets/video/travel.mp4"
const Header = () => {
    return(
    <header className="header">
        <div className="videoSection">
            <video src={video} muted loop autoPlay></video>
        </div>
    <div className="headerItem">
        <div>
        <h1 className="headerH1">We are Travel Friends</h1>
        <p className="headerP">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        <div className="headerBtn">
            <a href="" className="btn btn-smart">Read more &rarr;</a>
        </div>
        </div>
    </div>
    </header>
    );
}
export default Header