import React, { useState } from "react"
import front from "../assets/img/front.jpg"
import back from "../assets/img/back.jpg"
import { globalContext } from "../Context/globalContext"
// strongPAYONEER,._@12345
const About = () => {
    // const { scrollAnmiation } = React.useContext(globalContext)
    // const scrollAnmiation = () => {
    //     const animate = document.querySelector(".animate");
    //     let animatePosition = animate.getBoundingClientRect().top;

    //     let viewPortHight = window.innerHeight / 2;
    //     console.log(animatePosition, viewPortHight)
    //     if (animatePosition < viewPortHight) {
    //         console.log('Now run')
    //         animate.classList.add("add-animation");
    //     } else {
    //         animate.classList.remove("add-animation")
    //     }
    // }
    // React.useEffect(() => {
    //     window.addEventListener("scroll", scrollAnmiation);
    // }, [])
    return (
        <section id="about">
            <div className="container">
                <div className="row animate">
                    <div className="col-6">
                        <div className="aboutImages">
                            <div className="backImage">
                                <img src={front} alt="back image" />
                                <div className="frontImage">
                                    <img src={back} alt="front image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="center">
                            <h1 className="heading">Who we are?</h1>
                        </div>
                        <div className="left">
                            <p className="aboutP"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About