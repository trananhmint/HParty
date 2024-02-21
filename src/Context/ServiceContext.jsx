import React, { createContext, useEffect, useState } from "react";
import all_service from '../Components/Assets/all_service'
import axios from "axios";
import { FetchProduct } from "./fetchData";
export const ServiceContext = createContext(null);



const ServiceContextProvider = (props) => {

    const getDefaultCart = () => {

        let cart = {}
        for (let index = 0; index < FetchProduct().length + 1; index++) {
            cart[index] = 0;
        }
        return cart;
    }


    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }

    }


    const getTotalPrice = () => {
        let totalPrice = 0;
        for (let key in cartItems) {
            if (cartItems[key] > 0) {
                let serviceInfo = FetchProduct().find((service) => service.serviceId === key)
                if (serviceInfo) {
                    totalPrice += serviceInfo.price * cartItems[key];
                }
            }
        }
        return totalPrice;
    }

    const getCountOfCart = () => {
        let count = 0;
        for (let index in cartItems) {
            if (cartItems[index] > 0) {
                count += cartItems[index];
            }
        }
        return count;
    }


    const contextValue = { all_service, cartItems, addToCart, removeFromCart, getTotalPrice, getCountOfCart };
    return <ServiceContext.Provider value={contextValue}>
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceContextProvider;