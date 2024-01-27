import React, { createContext } from "react";
import all_service from '../Assets/all_service'
export const ServiceContext = createContext(null);

const ServiceContextProvider = (props) => {
    const contextValue = { all_service };
    return <ServiceContext.Provider value={contextValue}>
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceContextProvider;