import React, { createContext } from "react";
export const globalContext = createContext();

const GlobalContextProvider = (props) => {
    const [nav, navUpdate] = React.useState(false);
    const [gallery, setGallery] = React.useState('');
    const navStatus = () => {
        navUpdate(!nav);
    }
    const updateGallery = (image) => {
        setGallery(image);
    }
    const scrollAnmiation = () => {
        const animate = document.querySelectorAll(".animate");
        animate.forEach(animation => {
            let animatePosition = animation.getBoundingClientRect().top;

            let viewPortHight = window.innerHeight / 2;
            console.log(animatePosition, viewPortHight)
            if (animatePosition < viewPortHight) {
                console.log('Now run')
                animation.classList.add("add-animation");
            } else {
                animation.classList.remove("add-animation")
            }
        })

    }

    React.useEffect(() => {
        window.addEventListener("scroll", scrollAnmiation);
    }, [])
    return (
        <globalContext.Provider value={{ nav, navStatus, gallery, updateGallery, scrollAnmiation }}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider