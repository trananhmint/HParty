import React, { useEffect, useState } from 'react'
import './CSS/ServiceCategory.css'
import Item from '../Components/Item/Item';
import ReactPaginate from 'react-paginate';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import axios from 'axios';
import ServiceBreadcrumb from '../Components/Breadcrumbs/ServiceBreadcrumb';
import { CircularProgress } from '@mui/material';
export const ServiceCategory = (props) => {


  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/Service/services')
      setItems(response.data.data.filter((e) => { return e.categoryId === Number(props.categoryId) }));
      setLoading(false);
    }
    fetchData();
  }, []);


  function Items({ currentItems }) {
    return (
      <div className='services-displayed'>
        {currentItems && currentItems.map((item, i) => {
          if (Number(props.categoryId) === item.categoryId && item.status === 1) {
            return <Item key={i} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} images={item.images} />
          } else {
            return null;
          }
        })}
      </div>

    )
  }

  console.log(items)

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

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <CircularProgress color="primary" size={60} thickness={5} />
      </div>
    );
  }

  return (
    <div className='services'>
      <Navbar />
      <ServiceBreadcrumb service={props} />
      <img className='services-banner' src={props.banner} alt="" />
      <div className="services-indexSort">
        <p>
          <span>Showing 1-8</span> out of <span>Services</span>
        </p>
        <div className="services-sort">
        </div>
      </div>
      <div className="services-products">
        <PaginatedItems itemsPerPage={8} />
      </div>
      <Footer />
    </div>
  )
}

export default ServiceCategory;