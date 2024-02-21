import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './CSS/Alerts.css'
import all_service from '../Components/Assets/all_service';
import Item from '../Components/Item/Item';
import ReactPaginate from 'react-paginate';
import { fetchService } from '../Context/fetchService';
export const Alerts = () => {
    // const items = all_service;
    const [items, setItems] = useState([]);

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
                        <AlertTitle style={{ fontSize: '30px', fontWeight: '600' }}>Booking is completed</AlertTitle>
                        Your booking party is now preparing
                    </Alert>

                    <Alert severity="error" style={{ fontSize: '22px', justifyContent: 'center' }}>
                        <AlertTitle style={{ fontSize: '30px', fontWeight: '600' }}>Opps!!There is something wrong</AlertTitle>
                        Please try to recover your booking by clicking on the button below
                    </Alert>
                </Stack>
            </div>

            <div className="alerts-services">
                <PaginatedItems itemsPerPage={16} />
            </div>
            <Footer />
        </div>
    )


}

export default Alerts;