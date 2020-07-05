import React, { useContext } from "react"
import { globalContext } from "../Context/globalContext"
const Toggle = () => {
    const {navStatus} = useContext(globalContext)
    return(
        <div className="toggle">
        <div className="toggleChild" onClick={navStatus}></div>
        </div>
    )
}

export default Toggle;