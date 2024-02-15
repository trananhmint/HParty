import React, { useContext, useEffect, useState } from 'react'
import './CSS/ServiceCategory.css'
import { ServiceContext } from '../Components/Context/ServiceContext';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from '../Components/Item/Item';

// import { fetchService } from '../Components/Context/fetchService';
import ReactPaginate from 'react-paginate';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { fetchService } from '../Context/fetchService';


export const ServiceCategory = (props) => {
  
  const { all_service } = useContext(ServiceContext);

  const items = all_service.filter((item) => item.category === props.category)


  function Items({ currentItems }) {
    return (
      <div className='services-displayed'>
        {currentItems && currentItems.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price} place={item.place} />
          } else {
            return null;
          }
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



  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetchService();
    console.log( typeof data.data);
  }

  return (
    <div className='services'>
      <Navbar/>
      <img className='services-banner' src={props.banner} alt="" />
      <div className="services-indexSort">
        <p>
          <span>Showing 1-8</span> out of <span>{all_service.length + 1}</span> services
        </p>
        <div className="services-sort">
        </div>
      </div>
      <div className="services-products">
        <PaginatedItems itemsPerPage={8} />
      </div>
    <Footer/>
    </div>
  )
}

export default ServiceCategory;