import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './CSS/Alerts.css'
import Item from '../Components/Item/Item';
import ReactPaginate from 'react-paginate';
import { fetchService } from '../Context/fetchService';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { ServiceContext } from '../Context/ServiceContext';


export const Alerts = () => {
    const { clearCart } = useState(ServiceContext);
    // clearCart();
    // function removeCart() {
    //     const cartId = localStorage.getItem("email");
    //     console.log(cartId);
    //     localStorage.setItem(cartId, JSON.stringify([]));
    //     const cart = localStorage.getItem(cartId);
    //     console.log(cart);
    // }




    const apiUrl1 = "https://bookingbirthdayparties.azurewebsites.net/api/Deposit";
    let status = "fail";


    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    // Lấy tham số truy vấn (query parameters) từ URL
    const queryParams = window.location.search;

    // Loại bỏ ký tự "?" ở đầu chuỗi nếu có
    const cleanQuery = queryParams.replace("?", "");

    // Tạo một đối tượng chứa thông tin từ tham số truy vấn
    const urlParams = new URLSearchParams(cleanQuery);

    // Trích xuất các giá trị từ tham số truy vấn
    const vnp_Amount = urlParams.get("vnp_Amount");
    const vnp_BankCode = urlParams.get("vnp_BankCode");
    const vnp_BankTranNo = urlParams.get("vnp_BankTranNo");
    const vnp_CardType = urlParams.get("vnp_CardType");
    const vnp_OrderInfo = urlParams.get("vnp_OrderInfo");
    const vnp_PayDate = urlParams.get("vnp_PayDate");
    const vnp_ResponseCode = urlParams.get("vnp_ResponseCode");
    const vnp_TmnCode = urlParams.get("vnp_TmnCode");
    const vnp_TransactionNo = urlParams.get("vnp_TransactionNo");
    const vnp_TransactionStatus = urlParams.get("vnp_TransactionStatus");
    const vnp_TxnRef = urlParams.get("vnp_TxnRef");
    const vnp_SecureHash = urlParams.get("vnp_SecureHash");

    // In ra các giá trị
    console.log("vnp_Amount: " + vnp_Amount);
    console.log("vnp_BankCode: " + vnp_BankCode);
    console.log("vnp_BankTranNo: " + vnp_BankTranNo);
    console.log("vnp_CardType: " + vnp_CardType);
    console.log("vnp_OrderInfo: " + vnp_OrderInfo);
    console.log("vnp_PayDate: " + vnp_PayDate);
    console.log("vnp_ResponseCode: " + vnp_ResponseCode);
    console.log("vnp_TmnCode: " + vnp_TmnCode);
    console.log("vnp_TransactionNo: " + vnp_TransactionNo);
    console.log("vnp_TransactionStatus: " + vnp_TransactionStatus);
    console.log("vnp_TxnRef: " + vnp_TxnRef);
    console.log("vnp_SecureHash: " + vnp_SecureHash);

    if (vnp_ResponseCode === "00") {
        const orderDetail = JSON.parse(localStorage.getItem("orderItem"));
        localStorage.removeItem("shoppingCart");

        status = "success";

        const data = {
            Success: status,
            PaymentMethod: "VNPay",
            TransactionInfo: vnp_OrderInfo,
            TransactionId: vnp_TransactionNo,
            Token: vnp_SecureHash,
            VnPayResponseCode: vnp_ResponseCode,
            OrderCreate: orderDetail,
        };

        const postData = async () => {
            try {
                const postMethod = await axios.post(apiUrl1, data);
                console.log(postMethod.data);
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        };
        postData();
    }


    const fetchData = async () => {
        try {
            const data = await fetchService();
            setItems(data.data.data);
        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchData();
    }, []);


    function Items({ currentItems }) {
        return (
            <div className='services-displayed'>
                {currentItems && currentItems.map((item, i) => {
                    return <Item key={i} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} />
                })}
            </div>

        )
    }

    function PaginatedItems({ itemsPerPage }) {
        const [currentItems, setCurrentItems] = useState(null);

        const [pageCount, setPageCount] = useState(0);

        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);

            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage))
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage % items.length);
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        }
        return (
            <div className='services-display-pagination'>
                <div >
                    <Items currentItems={currentItems} />
                </div>


                <div className="services-pagination">
                    <ReactPaginate

                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>

            </div>


        )

    }
    return (
        <div className='alert'>
            <Navbar />
            <div className="alert-successful-error">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success" style={{ fontSize: '22px', justifyContent: 'center' }}>
                        <AlertTitle style={{ fontSize: '30px', fontWeight: '600' }}>Thank You For Booking</AlertTitle>
                        Please check your party in the your order
                    </Alert>
                </Stack>
            </div>
            <p>{clearCart()}</p>
            <div className="alerts-services">
                <PaginatedItems itemsPerPage={16} />
            </div>
            <Footer />
        </div>
    )


}

export default Alerts;