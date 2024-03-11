import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import './UserTable.css'
import { fetchUser } from '../../Context/fetchUser';
import axios from 'axios';
import ModalUpdateUser from '../EditForm/EditUser';


export default function UserTable() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/users',
        {
          withCredentials: true,
        });
      console.log(data);
      setItems(data.data.data);

    } catch (err) {
      console.log(err);
    }

  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead className='table-header'>
          <TableRow >
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} >ID</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Full Name</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Email</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Address</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Phone</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Role</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Status</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.userId}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }}>{item.fullName}</TableCell>
              <TableCell sx={{ fontSize: '16px' }}>{item.email}</TableCell>
              <TableCell sx={{ fontSize: '16px' }}>{item.address}</TableCell>
              <TableCell sx={{ fontSize: '16px' }}>{item.phone}</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">
                {item.roleId === 1 ? 'Customer' : item.roleId === 2 ? 'Party Host' : item.roleId === 3 ? 'Admin' : ''}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: item.status === 'ACTIVE' ? '#32CD32' : '#FF4500',
                    borderRadius: '20px',
                    fontSize: '15px',
                    boxShadow: '1px 1px ',
                  }}>
                  {item.status}
                </Button>
              </TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={1} alignItems={'center'} justifyContent={'space-around'}>
                  <ModalUpdateUser />
                  <Button variant="outlined" startIcon={<DeleteIcon />} style={{ borderColor: '#f5a02c', color: '#f5a02c' }}>
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