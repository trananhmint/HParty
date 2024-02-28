import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from 'react-redux';

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
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(cartId)) || []);
    const dispatch = useDispatch();
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    localStorage.setItem(cartId, JSON.stringify(cart))


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
    let cartItem = [...itemOfRoom, ...itemOfService];



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
        // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        // console.log("Add to cart");
        // console.log(cartItems);

        setCart([...cart, itemId]);
        // cart.unshift(itemId);
        // cart = cart.filter(onlyUnique);
        console.log("Add to cart");
        console.log(cart);
        // localStorage.setItem(cartId, JSON.stringify(cart))
        console.log(localStorage.getItem(cartId));

    }


    // const removeRoomsFromCart = (itemId) => {
    //     if (product[itemId] > 0) {
    //         setProduct((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    //     }

    // }

    const removeFromCart = (itemId) => {
        // if (cartItems[itemId] > 0) {
        //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        // }
        //    let newCart = cart.filter((currentItemId) => currentItemId !== itemId);
        //    setCart(newCart);

        let index = cart.indexOf(itemId);
        cart.splice(index, 1);
        // delete cart[index]
        setCart([...cart]);

        // cart = cart.filter(onlyUnique);
        // localStorage.setItem(cartId, JSON.stringify(cart))
        // console.log(localStorage.getItem(cartId));
    }

    const getQuantity = (itemId) => {
        let quantity = 0;
        for (let index of itemOfCart) {
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

        // let sumPrice = 0;

        // for (let key in product) {
        //     if (product[key] > 0) {
        //         let roomInfo = rooms.find((room) => Number(room.roomId) === Number(key))
        //         if (roomInfo) {
        //             sumPrice += roomInfo.price * product[key];
        //         }
        //     }
        // }

        // for (let key in cartItems) {
        //     if (cartItems[key] > 0) {
        //         let serviceInfo = services.find((service) => Number(service.serviceId) === Number(key))
        //         console.log(serviceInfo)
        //         if (serviceInfo) {
        //             totalPrice += serviceInfo.price * cartItems[key];
        //         }
        //     }
        // }

        // return totalPrice + sumPrice;


    }



    const getCountOfCart = () => {
        // let roomCount = 0;

        // for (let index in product) {
        //     if (product[index] > 0) {
        //         roomCount += product[index];
        //     }
        // }



        // for (let index in cartItems) {
        //     if (cartItems[index] > 0) {
        //         count += cartItems[index];
        //     }
        // }
        // return count + roomCount;
        // console.log(cart)
        let count = 0;

        for (let index of cartItem) {
            count = count + 1

        }
        return count;

    }



    const contextValue = { services, rooms, AddToCart, removeFromCart, getTotalPrice, getCountOfCart, getQuantity, CartOfItems, totalPrice };
    return <ServiceContext.Provider value={contextValue}>
        {props.children}
    </ServiceContext.Provider>

}

export default ServiceContextProvider;