import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "../redux/CartSlice";

import { FetchProduct } from "./fetchData";
import { useDispatch, useSelector } from 'react-redux';

export const ServiceContext = createContext(null);


const GetDefaultCart = () => {
    let cart = {}
    for (let index = 0; index <= 100; index++) {
        cart[index] = 0;
    }
    return cart;


}


const ServiceContextProvider = (props) => {
    const [product, setProduct] = useState(GetDefaultCart());
    const [cartItems, setCartItems] = useState(GetDefaultCart());
    const [totalPrice, setTotalPrice] = useState(0);


    const [rooms, setRooms] = useState([]);
    const [services, setServices] = useState([]);

    const dispatch = useDispatch();




    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Room/rooms')
            setRooms(response.data.data);
        }
        fetchData();
    }, []);







    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Service/services')
            setServices(response.data.data);
            console.log(response.data);
        }
        fetchData();
    }, []);
    dispatch(addToCart({ rooms, services, totalPrice }));

    // const cart = useSelector((state) => state.cart.cart)
    // console.log(cart);

    const AddRoomsToCart = (itemId) => {
        setProduct((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log("Add to cart");
        console.log(product);
    }


    const AddToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log("Add to cart");
        console.log(cartItems);

    }


    const removeRoomsFromCart = (itemId) => {
        if (product[itemId] > 0) {
            setProduct((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }

    }

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }

    }


    const getTotalPrice = () => {
        let totalPrice = 0;
        let sumPrice = 0;

        for (let key in product) {
            if (product[key] > 0) {
                let roomInfo = rooms.find((room) => Number(room.roomId) === Number(key))
                if (roomInfo) {
                    sumPrice += roomInfo.price * product[key];
                }
            }
        }

        for (let key in cartItems) {
            if (cartItems[key] > 0) {
                let serviceInfo = services.find((service) => Number(service.serviceId) === Number(key))
                console.log(serviceInfo)
                if (serviceInfo) {
                    totalPrice += serviceInfo.price * cartItems[key];
                }
            }
        }
        setTotalPrice(totalPrice + sumPrice);
        return totalPrice + sumPrice;
    }

    const getCountOfCart = () => {
        let count = 0;
        let roomCount = 0;
        for (let index in product) {
            if (product[index] > 0) {
                roomCount += product[index];
            }
        }



        for (let index in cartItems) {
            if (cartItems[index] > 0) {
                count += cartItems[index];
            }
        }
        return count + roomCount;
    }


    const contextValue = { services, rooms, cartItems, product, AddToCart, AddRoomsToCart, removeFromCart, removeRoomsFromCart, getTotalPrice, getCountOfCart, totalPrice  };
    return <ServiceContext.Provider value={contextValue}>
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceContextProvider;