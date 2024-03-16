import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from 'react-redux';
import { fetchService } from "./fetchService";

export const ServiceContext = createContext(null);



// const GetDefaultCart = () => {
//     let cart = {}
//     for (let index = 0; index <= 100; index++) {
//         cart[index] = 0;
//     }
//     return cart;


// }


const ServiceContextProvider = (props) => {
    // const [product, setProduct] = useState(GetDefaultCart());
    // const [cartItems, setCartItems] = useState(GetDefaultCart());
    const [totalPrice, setTotalPrice] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [services, setServices] = useState([]);
    const cartId = localStorage.getItem("email");
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(cartId)) || []);
    const dispatch = useDispatch();
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    localStorage.setItem(cartId, JSON.stringify(cart.filter(onlyUnique)));

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });




    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/Room/rooms')
            setRooms(response.data.data);
        }
        fetchData();
    }, []);







    useEffect(() => {
        async function fetchData() {
            let response = await fetchService();
            setServices(response.data.data);
        }
        fetchData();
    }, []);
    dispatch(addToCart({ rooms, services, totalPrice }));

    // const cart = useSelector((state) => state.cart.cart)
    // console.log(cart);
    let room = rooms.map((room) => room)
    let service = services.map((service) => service)
    let roomItem = cart.map((item) => {
        return room.find((r) => Number(r.roomId) === Number(item))
    })
    const serviceItem = cart.map((item) => {
        return service.find((s) => Number(s.serviceId) === Number(item))
    })
    let itemOfRoom = roomItem.filter((room) => room !== undefined);
    let itemOfService = serviceItem.filter((service) => service !== undefined);
    let uniqueItemOfRoom = [...itemOfRoom.filter(onlyUnique)];
    let uniqueItemOfService = [...itemOfService.filter(onlyUnique)];
    let cartItem = [...uniqueItemOfRoom, ...uniqueItemOfService];



    let cartOfItems = [];
    cartOfItems = [...uniqueItemOfRoom, ...uniqueItemOfService];

    const itemOfCart = cartItem.map((item) => {
        if (item.roomId) {
            return item.roomId;
        }
        if (item.serviceId) {
            return item.serviceId;
        }
    })



    const CartOfItems = () => {
        let cart = [];
        cart = [...cartOfItems];
        return cart;
    }


    // const AddRoomsToCart = (itemId) => {
    //     setProduct((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     console.log("Add to cart");
    //     console.log(product);
    // }




    const AddToCart = (itemId) => {
        setCart([...cart.filter(onlyUnique), itemId]);
        console.log("Add to cart");
        console.log(cart);
        console.log(localStorage.getItem(cartId));

    }



    const removeFromCart = (itemId) => {
        let index = cart.indexOf(itemId);
        cart.splice(index, 1);
        // delete cart[index]
        setCart([...cart]);

    }

    const getQuantity = (itemId) => {
        let quantity = 0;
        for (let index of itemOfCart.filter(onlyUnique)) {
            if (Number(itemId) === index) {
                quantity = quantity + 1
            }
        }
        return quantity;

    }


    const getTotalPrice = () => {
        let totalPrice = 0;

        for (let key of itemOfCart) {
            if (getQuantity(key) > 0) {
                let cartInfo = cartOfItems.find((item) => {
                    if (item.roomId) {
                        return Number(item.roomId) === Number(key)
                    } else if (item.serviceId) {
                        return Number(item.serviceId) === Number(key)
                    }
                })
                if (cartInfo) {
                    totalPrice += cartInfo.price * getQuantity(key);
                }
            }
        }
        setTotalPrice(totalPrice);
        return totalPrice;


    }



    const getCountOfCart = () => {

        let count = 0;

        for (let index of cartItem) {
            count = count + 1
            setCount(count);
        }
        return count;

    }

    const clearCart = () => {
        localStorage.setItem(cartId, JSON.stringify([]));
        setCart([]);
    }



    const contextValue = { services, rooms, AddToCart, removeFromCart, getTotalPrice, getCountOfCart, getQuantity, CartOfItems, totalPrice, clearCart, count, VND };
    return <ServiceContext.Provider value={contextValue}>
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceContextProvider;