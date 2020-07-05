import React from "react"
import Gallery1 from "../assets/img/gallery1.jpg"
import Gallery2 from "../assets/img/gallery2.jpg"
import Gallery3 from "../assets/img/gallery3.jpg"
import Gallery4 from "../assets/img/gallery4.jpg"
import Gallery5 from "../assets/img/gallery5.jpg"
import Gallery6 from "../assets/img/gallery6.jpg"
import Gallery7 from "../assets/img/gallery7.jpg"
import Gallery8 from "../assets/img/gallery8.jpg"
import Gallery9 from "../assets/img/gallery9.jpg"
import Gallery10 from "../assets/img/gallery10.jpg"
import Gallery11 from "../assets/img/gallery11.jpg"
import Gallery12 from "../assets/img/gallery12.jpg"
import { globalContext } from "../Context/globalContext"
const Features = () => {
    const [images] = React.useState([Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12])
    const { updateGallery } = React.useContext(globalContext);
    const getImage = (image) => {
        updateGallery(image)
    }
    return (
        <section id="features">
            <div className="center mb-40">
                <h1 className="heading">Feature tours</h1>
            </div>
            <div className="row">

                {images.map(image => (
                    <div className="col-2 gallery" key={image} onClick={() => getImage(image)}>
                        <img src={image} alt="Gallery1" />
                    </div>
                ))}

            </div>

        </section>
    )

}
export default Features