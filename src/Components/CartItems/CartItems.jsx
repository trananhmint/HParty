import React, { useContext } from 'react'
import './CartItems.css'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useAuth } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

export const CartItems = () => {
  const { services, rooms, totalPrice, CartOfItems, clearCart, removeFromCart, getTotalPrice, getCountOfCart, getQuantity } = useContext(ServiceContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useAuth();
  const cookies = new Cookies();
  let token = cookies.get("authToken");
  const cartId = localStorage.getItem("email");
  let cart = JSON.parse(localStorage.getItem(cartId));
  let room = rooms.map((room) => room)
  let service = services.map((service) => service)
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function uniqueRoom(cart, room) {
    let uniqueItemOfRoom = [];
    if (cart.length > 0) {
      let roomItem = cart.map((item) => {
        return room.find((r) => Number(r.roomId) === Number(item))
      })
      let itemOfRoom = roomItem.filter((room) => room !== undefined);
      uniqueItemOfRoom = [...itemOfRoom.filter(onlyUnique)];
      console.log(uniqueItemOfRoom);
    }

    return uniqueItemOfRoom;
  }

  function uniqueService(cart, service) {
    let uniqueItemOfService = [];
    if (cart.length > 0) {
      let serviceItem = cart.map((item) => {
        return service.find((s) => Number(s.serviceId) === Number(item))
      })


      let itemOfService = serviceItem.filter((service) => service !== undefined);
      uniqueItemOfService = [...itemOfService.filter(onlyUnique)];
      console.log(uniqueItemOfService);
    }
    return uniqueItemOfService;


  }




  // console.log(uniqueItemOfService);
  // console.log(CartOfItems());
  console.log(uniqueService(cart, service));

  const getDecoration = uniqueService(cart, service).some((service) => Number(service.categoryId) === 1)
  const getFood = uniqueService(cart, service).some((service) => Number(service.categoryId) === 2);
  const getWaiter = uniqueService(cart, service).some((service) => Number(service.categoryId) === 3);
  console.log("Deco: ", getDecoration);
  console.log("Food: ", getFood);
  console.log("Waiter: ", getWaiter);
  console.log("Room: ", uniqueRoom(cart, room))

  const handleClick = (e) => {
    e.preventDefault();
    clearCart();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      rooms: uniqueRoom(cart, room),
      services: uniqueService(cart, service),
      totalPrice: totalPrice,
    }
    console.log(newItems);

    // console.log(typeof newItems.rooms);
    console.log(newItems.rooms.length);
    if (token !== null && token !== "") {
      if (uniqueRoom(cart, room).length === 0) {
        toast.warning('Must choose Room to book', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } if (getDecoration !== true && getFood !== true && getWaiter !== true) {
        toast.warning('You do not have any service. Please choose services', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } if (getDecoration !== true) {
        toast.warning('Must choose Decoration to book', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } if (getFood !== true) {
        toast.warning('Must choose Food to book', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } if (getWaiter !== true) {
        toast.warning('Must choose Waiter to book', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }


      else {
        dispatch(addToCart(newItems))
        navigate("/bookingService");
      }
    }
    else {
      toast.warning('Login before booking', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // navigate("/cart");
    }

    localStorage.setItem('uniqueItemOfRoom', JSON.stringify(uniqueRoom(cart, room)));
    localStorage.setItem('uniqueItemOfService', JSON.stringify(uniqueService(cart, service)));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

  }

  // const cart = useSelector((state) => state.cart.cart)
  // console.log(cart);


  return (
    <form onSubmit={handleSubmit}>
      <div className='cartitems'>
        <div className="cartitems-items">
          <h1>Your Shopping Cart</h1>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr />

          {CartOfItems().map((item) => {
            if (item.roomId !== undefined && item.roomId !== null && item.roomId !== "" && item.roomId > 0) {
              return <div>
                <div className="cartitems-format cartitems-format-main">
                  <img src={item.imgPath} alt="" className='cartitems-image' />
                  <p>{item.roomName}</p>
                  <p>{item.price}đ</p>
                  <p className="cartitems-quantity">
                    {/* {product[item.roomId]} */}
                    {getQuantity(item.roomId)}
                  </p>
                  <p>{item.price * getQuantity(item.roomId)} đ</p>
                  <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { removeFromCart(item.roomId) }} />
                </div>
              </div>


            } else {
              return null;
            }

          })

          }

          {CartOfItems().map((item) => {
            if (item.serviceId !== undefined && item.serviceId !== null && item.serviceId !== "" && item.serviceId > 0) {
              return <div>
                <div className="cartitems-format cartitems-format-main">
                  <img src={item.imgPath} alt="" className='cartitems-image' />
                  <p>{item.serviceName}</p>
                  <p>{item.price}đ</p>
                  <p className="cartitems-quantity">
                    {/* {cartItems[item.serviceId]} */}
                    {getQuantity(item.serviceId)}
                  </p>
                  <p>{item.price * getQuantity(item.serviceId)} đ</p>
                  <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { removeFromCart(item.serviceId) }} />
                </div>
              </div>
            } else {
              return null;
            }
          })}
          <div className='cartitems-clear'>
            <button onClick={handleClick}>CLEAR</button>
          </div>
        </div>


        <div className="cartitems-total">
          <div className="cartitems-total-promotion">
            <p> <ConfirmationNumberOutlinedIcon /> Shop voucher</p>
            <p>Choose voucher or enter your code</p>
          </div>
          <hr />
          <div className="cartitems-total-cart">
            <p className="cartitems-total-services">Choose {getCountOfCart()} service(s)</p>
            <div className="cartitems-total-price">
              <p>Total: </p>
              {/* <input name="totalPrice" onChange={handleInput}/> */}
              <p>{getTotalPrice()} đ</p>
            </div>

            <button>BOOKING</button>
          </div>
        </div>
      </div>
    </form>

  )
}

export default CartItems