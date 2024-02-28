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
  const { services, rooms, totalPrice, CartOfItems, AddToCart, removeFromCart, getTotalPrice, getCountOfCart, getQuantity } = useContext(ServiceContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useAuth();
  const cookies = new Cookies();
  let token = cookies.get("authToken");
  const cartId = localStorage.getItem("email");
  let cart = JSON.parse(localStorage.getItem(cartId));
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

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  let uniqueItemOfRoom = [...itemOfRoom.filter(onlyUnique)];
  let uniqueItemOfService = [...itemOfService.filter(onlyUnique)];



  // console.log(uniqueItemOfService);
  // console.log(CartOfItems());

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      rooms: uniqueItemOfRoom,
      services: uniqueItemOfService,
      totalPrice: totalPrice,
    }
    console.log(newItems);

    // console.log(typeof newItems.rooms);
    // console.log(newItems.rooms);
    if (token !== null && token !== "") {
      if (newItems.rooms !== null && newItems.rooms.length !== 0) {
        dispatch(addToCart(newItems))
        navigate("/bookingService");
      } else {
        toast.warning('Must choose room to book', {
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

    localStorage.setItem('uniqueItemOfRoom', JSON.stringify(uniqueItemOfRoom));
    localStorage.setItem('uniqueItemOfService', JSON.stringify(uniqueItemOfService));
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
                  <AddCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { AddToCart(item.roomId) }} />
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
                  <AddCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { AddToCart(item.serviceId) }} />
                  <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { removeFromCart(item.serviceId) }} />
                </div>
              </div>
            } else {
              return null;
            }
          })}
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
            <button >BOOKING</button>
          </div>
        </div>
      </div>
    </form>

  )
}

export default CartItems