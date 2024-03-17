import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import SearchIcon from '@mui/icons-material/Search';
import './HostTransactionHistory.css'

function createData(orderId, content, amount, paymentMethod, date, time) {
  return { orderId, content, amount, paymentMethod, date, time  };
}

const rows = [
  createData("1","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 13), '8:30 PM'),
  createData("2","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 13), '9:45 AM'),
  createData("3","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 13), '2:15 PM'),
  createData("4","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 12), '10:30 AM'),
  createData("5","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 12), '1:45 PM'),
  createData("6","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 11), '11:00 AM'),
  createData("7","Pay for Booking BabyShark room", 100000000, 'VNPay', new Date(2024, 3, 11), '3:30 PM'),
];


export default function HostTransactionHistoryTable() {
  const uniqueDates = [
    ...new Set(rows.map((row) => row.date.toLocaleDateString())),
  ];

  const totalTransactions = rows.length;
  return (
    
    <TableContainer component={Paper}>
            {/* <form>
    <div className='transaction-search'>
        <input type="text" placeholder='Search here' />
        <button><SearchIcon /></button>
    </div>
</form>
<br/>
<br/> */}
<div className='transaction-filter'>
      {/* <span>Filter:</span>
        <button >Last 3 months</button>
        <select style={{ background: '#DEB887', color: 'white' }} >
      <option style={{ background: '#DEB887', color: 'white' }}  value="All Method">All Method</option>
      <option style={{ background: '#DEB887', color: 'white' }}  value="VNPay">VNPay</option>
      <option style={{ background: '#DEB887', color: 'white' }} value="CreditCard">Credit Card</option>
    </select> */}
    <button style={{float: 'left'}} >Balance</button>
    <button style={{float: 'right'}} >Withdrawal</button>
    </div>
    <br/>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
        <TableRow>
            <TableCell colSpan={3} sx={{ fontSize: '20px', fontWeight: '550' }}>
              {totalTransactions} Transaction
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uniqueDates.map((date) => (
            <React.Fragment key={date}>
              <TableRow sx={{background: '#DEB887'}}>
                <TableCell colSpan={6} sx={{ fontSize: '18px', fontWeight: '600', color: 'white' }} >Date: {date}</TableCell>
              </TableRow>
              {rows
                .filter((row) => row.date.toLocaleDateString() === date)
                .map((row, index) => (
                  <TableRow
                    key={`${date}-${index}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell> */}
                    <TableCell sx={{ fontSize: '20px', whiteSpace: 'nowrap' }}>
                    Order ID : {row.orderId}
                    <br/>
                    {row.content}
                    <br/>
                    Method: {row.paymentMethod}
                    <br/>
                    {row.time}
                    </TableCell>
                    {/* <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }} >{row.paymentMethod}</TableCell> */}
                    <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap', fontWeight:'600' }} > + {row.amount} VND</TableCell>
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
