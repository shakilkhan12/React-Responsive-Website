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


    return (
        <globalContext.Provider value={{ nav, navStatus, gallery, updateGallery }}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider