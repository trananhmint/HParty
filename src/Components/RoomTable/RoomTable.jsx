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
import './RoomTable.css'
import { fetchRoom } from '../../Context/fetchRoom';
import { disableRoom } from '../../Context/disableRoom';
import ModalUpdateRoom from '../EditForm/EditRoom';
import DeleteRoom from '../DeleteDialog/DeleteRoom';
import { toast } from 'react-toastify';


export default function RoomTable() {

  
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchRoom();
      setItems(data.data.data);
      console.log(data.data.data);
    } catch (err) {
      console.log(err);
    }

  };

  const handleDisableClick = async (id) => {
    try {
      await disableRoom(id);
      console.log("Room disable:", id);
      toast.success('Delete Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // fetchData();
      window.location.reload();
    } catch (error) {
      console.error("Error disabling room:", error);
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
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Room Name</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Description</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Capacity</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Address</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Price</TableCell>
            {/* <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">SalePrice</TableCell> */}
            {/* <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">UserId</TableCell> */}
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Status</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={item.roomId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{item.roomName}</TableCell>
              <TableCell sx={{ fontSize: '16px' }}>{item.description}</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align='center'>{item.capacity}</TableCell>
              <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{item.address}</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align='center'>{item.price}</TableCell>
              {/* <TableCell sx={{ fontSize: '16px' }} align='center'>{item.salePrice}</TableCell> */}
              {/* <TableCell sx={{ fontSize: '16px' }} align='center'>{item.userId}</TableCell> */}
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
                  <ModalUpdateRoom room={item} />
                  <DeleteRoom handleDisableClick={() => handleDisableClick(item.roomId)} />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}