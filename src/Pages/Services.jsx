import React, { useContext } from 'react'
import './CSS/Services.css'
import { ServiceContext } from '../Components/Context/ServiceContext';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from '../Components/Item/Item';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Services = (props) => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const { all_service } = useContext(ServiceContext);
  return (
    <div className='services'>
      <img className='services-banner' src={props.banner} alt="" />
      <div className="services-indexSort">
        <p>
          <span>Showwing 1-8</span> out of <span>18</span> services
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
        {all_service.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price} place={item.place} />
          } else {
            return null;
          }
        })}
      </div>
      <div className="services-pages-transition">

      </div>
    </div>
  )
}

export default Services;