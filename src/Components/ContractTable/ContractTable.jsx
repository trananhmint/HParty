import * as React from 'react';
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
import './ContractTable.css'

function createData(ContractId, LinkFile, Status) {
  return { ContractId, LinkFile, Status };
}

const rows = [
    createData(1, 'D:/FPT/CN7/SWD392/testPdf/output/Output.pdf', 1,),
    createData(2, 'D:/FPT/CN7/SWD392/testPdf/output/Output.pdf', 0,),
    createData(3, 'D:/FPT/CN7/SWD392/testPdf/output/Output.pdf', 1,),
    createData(4, 'D:/FPT/CN7/SWD392/testPdf/output/Output.pdf', 0,),
    createData(5, 'D:/FPT/CN7/SWD392/testPdf/output/Output.pdf', 1,),
];

export default function ContractTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead className='table-header'>
          <TableRow >
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} >ID</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">LinkFile</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Status</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ContractId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ContractId}
              </TableCell>
              <TableCell sx={{fontSize:'16px'}} align='center'>{row.LinkFile}</TableCell>
              <TableCell sx={{ fontSize: '16px'}} >
              <Button
                variant="contained"
                style={{
                    backgroundColor: row.Status === 1 ? '#32CD32' : '#FF4500',
                    borderRadius: '15px',
                    fontSize: '15px',
                    boxShadow: '1px 1px ',}}>
                    {row.Status === 1 ? 'ACTIVE': 'NON_ACTIVE'}
             </Button>
              </TableCell>
              <TableCell align='center'>
                <Stack direction="row" alignItems={'center'} justifyContent={'space-around'}>
                    <Button variant="outlined" endIcon={<EditIcon/>} style={{background:'#f5a02c', color: 'white', borderColor: 'white'}}>
                        Edit
                    </Button>

                    <Button variant="outlined" startIcon={<DeleteIcon />} style={{borderColor:'#f5a02c', color:'#f5a02c'}}>
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