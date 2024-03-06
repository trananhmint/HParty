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
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import './UserTable.css'
import { fetchUser } from '../../Context/fetchUser';
import axios from 'axios';
import ModalUpdateUser from '../EditForm/EditUser';

// function createData(userId, FullName, Status, RoleId, Email, Address) {
// return { userId, FullName, Status, RoleId, Email, Address };
//}

//const rows = [
//createData(1, 'Võ Nguyễn Trung Hải','ACTIVE', 1,'chunhai27032003@gmail.com', '123 Nguyễn Văn Tăng, phường Long Thạnh Mỹ, Quận 9, TP Hồ Chí Minh'),
//createData(2, 'Nguyễn Văn A', 'ACTIVE', 2, 'nguyenvana@example.com', '456 Lê Lợi, phường Phú Mỹ, Quận 7, TP Hồ Chí Minh'),
//createData(3, 'Trần Thị B', 'NON_ACTIVE', 3, 'tranthib@example.com', '789 Trần Phú, phường Bình Thủy, Quận Ninh Kiều, TP Cần Thơ'),
//createData(4, 'Lê Văn C', 'ACTIVE', 1,  'levanc@example.com', '101 Lê Lợi, phường Xuân Khánh, Quận Ninh Kiều, TP Cần Thơ'),
//createData(5, 'Phạm Thị D', 'NON_ACTIVE', 2,  'phamthid@example.com', '202 Lê Lợi, phường Hưng Lợi, TP Cẩm Phả, Quảng Ninh')
//];

export default function UserTable() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/users',
        {
          withCredentials: true
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
                    backgroundColor: item.Status === 'ACTIVE' ? '#32CD32' : '#FF4500',
                    borderRadius: '20px',
                  }}>
                  {item.Status}
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