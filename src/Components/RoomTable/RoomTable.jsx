import  React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import './RoomTable.css'
import { deleteService } from '../../Context/disableService';
import { fetchRoom } from '../../Context/fetchRoom';



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

  }


//   const handleDeleteClick = async (id) => {
//     try {
//         await deleteService(id);
//         fetchData(); // Refetch data to update the UI
//         console.log('Delete API request successful');
//     } catch (error) {
//         console.error('Error during Delete API request:', error);
//     }
// };
useEffect(() => {
  fetchData();
}, []);
  // function handleDeleteClick () {
  //   var option ={
  //     method: "DELETE", 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     fetch ()  
  //   }
  // }
//  const handleDeleteClick = async (id) => {
//   try {
//     const response = await fetch(`https://bookingbirthdayparties.azurewebsites.net/api/Service/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       console.error('Delete API request failed:', response.statusText);
//       return;
//     }
//     fetchData(); 
//     console.log('Delete API request successful');
//   } catch (error) {
//     console.error('Error during Delete API request:', error);
//   }
// };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead className='table-header'>
          <TableRow >
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} >ID</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Room Name</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Description</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Capacity</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Address</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Price</TableCell>
            {/* <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">UserID</TableCell> */}
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Status</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.roomId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.roomId}
              </TableCell>
              <TableCell sx={{fontSize:'16px', whiteSpace: 'nowrap'}}>{item.roomName}</TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.description}</TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.capacity}</TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.address}</TableCell>
              <TableCell sx={{fontSize:'16px', whiteSpace: 'nowrap'}} align='center'>{item.price}</TableCell>
              {/* <TableCell sx={{fontSize:'16px' , whiteSpace: 'nowrap'}} align='center'>{item.user.fullName}</TableCell> */}
              <TableCell sx={{ fontSize: '16px'}} align="center">
              <Button
                variant="contained"
                style={{
                    backgroundColor: item.status === 1 ? '#32CD32' : '#FF4500',
                    borderRadius: '15px',
                    fontSize: '15px',
                    boxShadow: '1px 1px ',
                    }}>
                    {item.status === 1 ? 'ACTIVE': 'NON_ACTIVE'}
             </Button>
              </TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={1} alignItems={'center'} justifyContent={'space-around'}>
                <Button variant="outlined" endIcon={<EditIcon/>} style={{background:'#f5a02c', color: 'white', borderColor: 'white'}}>
                        Edit
                    </Button>

                    <Button variant="outlined" 
                    startIcon={<DeleteIcon />} 
                    style={{ borderColor: '#f5a02c', color: '#f5a02c' }} 
                    // onClick={()=>handleDeleteClick(item.serviceId)} >
                    >
                      Delete
                    </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}