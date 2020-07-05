import React, { useContext } from "react"
import { globalContext } from "../Context/globalContext"
const Nav = () => {
    const {nav} = useContext(globalContext)
    console.log(nav);
    return(
        <>
        {nav ? <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav> : ''}
        
        </>
    )
}

export default Nav;