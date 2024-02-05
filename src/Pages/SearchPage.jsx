import React, { useContext, useEffect, useState } from 'react'
import './CSS/SearchPage.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ServiceContext } from '../Components/Context/ServiceContext';
import Item from '../Components/Item/Item';
import ReactPaginate from 'react-paginate';
import Checkbox from '@mui/material/Checkbox';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const SearchPage = () => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const { all_service } = useContext(ServiceContext);
    const items = all_service;

    function Items({ currentItems }) {
        return (
            <div className='services-displayed'>
                {currentItems && currentItems.map((item, i) => {

                    if (item.category === category) {
                        return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price} place={item.place} />
                    } else if (category === "") {
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

    return (
        <div className='searchpage'>

            <div className="searchpage-left">
                <h3><LightbulbOutlinedIcon/> Introduction to Services</h3>
                <div className="searchpage-sidebar">
                    <div className="searchpage-list">
                        <h3>Place</h3>
                        <ul>
                            <li><Checkbox {...label}/>Hà Nội</li>
                            <li><Checkbox {...label}/>Hồ Chí Minh</li>
                            <li><Checkbox {...label}/>Thái Nguyên</li>
                            <li><Checkbox {...label}/>Quảng Nam</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="searchpage-list">
                        <h3>Shipping</h3>
                        <ul>
                            <li><Checkbox {...label}/>Express</li>
                            <li><Checkbox {...label}/>Giao Hàng Nhanh</li>
                            <li><Checkbox {...label}/>Ninja Van</li>
                            <li><Checkbox {...label}/>Giao Hàng Tiết Kiệm</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="searchpage-list">
                        <h3>Company</h3>
                        <ul>
                            <li><Checkbox {...label}/>Asian</li>
                            <li><Checkbox {...label}/>Europe</li>
                            <li><Checkbox {...label}/>Australia</li>
                            <li><Checkbox {...label}/>America</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="searchpage-list">
                        <h3>Rating</h3>
                        <ul>
                            <li><Checkbox {...label}/>5 stars </li>
                            <li><Checkbox {...label}/>4 stars and upwards</li>
                            <li><Checkbox {...label}/>3 stars and upwards</li>
                            <li><Checkbox {...label}/>2 stars and upwards</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="searchpage-list">
                        <h3>Promotion</h3>
                        <ul>
                            <li><Checkbox {...label}/>Sales </li>
                            <li><Checkbox {...label}/>Vouchers</li>
                            <li><Checkbox {...label}/>Available</li>
                            <li><Checkbox {...label}/>Cheaper</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="searchpage-right">
                <div className="searchpage-sort">
                    <FormControl className='searchpage-display-sort' variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={category}
                            onChange={handleChange}
                            label="Category"
                            className='search-category'
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'rooms'}>Room</MenuItem>
                            <MenuItem value={'foods'}>Food</MenuItem>
                            <MenuItem value={'decorations'}>Decoration</MenuItem>
                            <MenuItem value={'waiters'}>Waiters</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="searchpage-services">
                    <PaginatedItems itemsPerPage={16} />
                </div>

            </div>
        </div>
    )
}

export default SearchPage;