import React from 'react'
import { globalContext } from "../Context/globalContext"
const Overly = () => {
    const { gallery, updateGallery } = React.useContext(globalContext)
    const closeOverlay = (e) => {
        const id = e.target.getAttribute('id')
        if (id === "over") {
            updateGallery('')
        }
    }

    return (
        <div>
            {gallery ? <div className="overlay" onClick={closeOverlay} id="over">
                <div className="overlay-image">
                    <img src={gallery} alt="overlay" />
                </div>
            </div> : ''}
        </div>

    )
}

export default Overly;
