import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './ServiceTable.css';
import { fetchService } from '../../Context/fetchService';
import { disableService } from '../../Context/disableService';
import ModalUnstyled from '../EditForm/EditService';
import DeleteService from '../DeleteDialog/DeleteService';


export default function ServiceTable() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  

  console.log(open);

  const fetchData = async () => {
    try {
      const data = await fetchService();
      setItems(data.data.data);
      console.log(data.data.data);
    } catch (err) {
      console.log(err);
    }

  }
  const handleDisableClick = async (id) => {
    try {
      await disableService(id);
      console.log("Service disable:", id);
      fetchData();
    } catch (error) {
      console.error("Error disabling service:", error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead className='table-header'>
          <TableRow >
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} >ID</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Service Name</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Description</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Price</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">UserID</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">CategoryID</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Status</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.serviceId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.serviceId}
              </TableCell>

              <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{item.serviceName}</TableCell>
              <TableCell sx={{ fontSize: '16px' }}>{item.description}</TableCell>
              <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }} align='center'>{item.user.fullName}</TableCell>
              <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{item.price}</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">
                {item.categoryId === 1 ? 'Decoration' : item.categoryId === 2 ? 'Food & Drinks' : item.categoryId === 3 ? 'Waiter' : ''}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: item.status === 1 ? '#32CD32' : '#FF4500',
                    borderRadius: '15px',
                    fontSize: '15px',
                    boxShadow: '1px 1px ',
                  }}>
                  {item.status === 1 ? 'ACTIVE' : 'NON_ACTIVE'}
                </Button>
              </TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={1} alignItems={'center'} justifyContent={'space-around'}>
                  <ModalUnstyled open={open} />
                    {/* <Button variant="outlined" 
                    startIcon={<DeleteIcon />} 
                    style={{ borderColor: '#f5a02c', color: '#f5a02c',borderRadius: '8px' }} 
                    onClick={()=>handleDisableClick(item.serviceId)}>
                      Delete
                    </Button>  */}
                    <DeleteService handleDisableClick={() => handleDisableClick(item.serviceId)} /> 
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}