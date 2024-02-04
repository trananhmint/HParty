import React, { useContext, useEffect, useState } from 'react'
import './CSS/Services.css'
import { ServiceContext } from '../Components/Context/ServiceContext';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from '../Components/Item/Item';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { fetchService } from '../Components/Context/fetchService';
import ReactPaginate from 'react-paginate';


export const ServiceCategory = (props) => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };



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



  // useEffect(() => {
  //   fetchData();
  // }, [])

  // const fetchData = async () => {
  //   const data = await fetchService();
  //   console.log(data.data);
  // }

  return (
    <div className='services'>
      <img className='services-banner' src={props.banner} alt="" />
      <div className="services-indexSort">
        <p>
          <span>Showing 1-8</span> out of <span>{all_service.length + 1}</span> services
        </p>
        <div className="services-sort">
          {/* Sort by <ArrowDropDownIcon
            style={{
              // fontSize:'25px',
              marginBottom: '-8px'
            }}
          /> */}
          {/* <div>Sort by:</div> */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'rooms'}>Room</MenuItem>
              <MenuItem value={'foods'}>Food</MenuItem>
              <MenuItem value={'decorations'}>Decoration</MenuItem>
              <MenuItem value={'service'}>Service</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="services-products">
        <PaginatedItems itemsPerPage={8} />
      </div>

    </div>
  )
}

export default ServiceCategory;