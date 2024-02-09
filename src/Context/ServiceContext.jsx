import React, { createContext, useState } from "react";
import all_service from '../Components/Assets/all_service'
export const ServiceContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_service.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ServiceContextProvider = (props) => {
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
            if (key > 0) {
                let product = all_service.find((product) => product.id === Number(key))
                if (product) {
                    totalPrice += product.price * cartItems[key];
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


    const contextValue = { all_service, cartItems, getCountOfCart, addToCart, removeFromCart, getTotalPrice };
    return <ServiceContext.Provider value={contextValue}>
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceContextProvider;