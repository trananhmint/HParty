import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../RoomTable/RoomTable.css'
import { fetchRoom } from '../../Context/fetchRoom';
import { disableRoom } from '../../Context/disableRoom';
import ModalUpdateRoom from '../EditForm/EditRoom';
import ModalCreateRoom from '../CreateForm/CreateRoom';
import DeleteRoom from '../DeleteDialog/DeleteRoom';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import axios from 'axios';


export const HostRoomTable = () => {
  const [items, setItems] = useState([]);
  const [host, setHost] = useState("");
  const [loading, setLoading] = useState(true);
  const [base64Image, setBase64Image] = useState('');

  const fetchPartyHost = async () => {
    try {
      const response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/User',
        {
          withCredentials: true,
        }
      )
      setHost(response.data.data);
      console.log(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  console.log(host.userId)


  const fetchData = async (id) => {
    try {
      setLoading(true); // Set loading to true before fetching data

      const data = await axios.get(`https://bookingbithdayparty.azurewebsites.net/api/Room/party_host/rooms/${id}`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      if (data.data.data !== null && data.data.data !== undefined) {
        setItems(data.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPartyHost();
  }, []);

  useEffect(() => {
    if (host) { // Check if user exists before calling fetchData
      fetchData(host.userId);
    }
  }, [host]);

  console.log(items)
  const itemRoom = items.filter((item) => {
    if (item.status === 1) {
      return item.status === 1
    } else {
      return [];
    }
  });
  console.log(itemRoom);
  if (loading) {
    return (
      <div className="loading-spinner-container">
        <CircularProgress color="primary" size={60} thickness={5} />
      </div>
    );
  }


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



  {
    if (itemRoom !== null && itemRoom.length > 0) {
      return (
        <div>
          <ModalCreateRoom />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
              <TableHead className='table-header'>
                <TableRow >
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} >No.</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Room Name</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Image</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Description</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Capacity</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Address</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Price</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Host</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Status</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontWeight: '550', color: 'white' }} align="center">Operation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, index) => {
                  if (item.status === 1 && item.images !== null && item.images.length > 0) {
                    return <TableRow
                      key={item.roomId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{item.roomName}</TableCell>
                      <TableCell className='edit-images' sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}><img src={`data:image/jpeg;base64,${item.images[0].imageBase64}`} alt="Images" /></TableCell>
                      <TableCell sx={{ fontSize: '16px' }}>{item.description}</TableCell>
                      <TableCell sx={{ fontSize: '16px' }}>{item.capacity}</TableCell>
                      <TableCell sx={{ fontSize: '16px' }}>{item.address}</TableCell>
                      <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }} align='center'>{item.price}</TableCell>
                      <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{host.fullName}</TableCell>
                      {/* <TableCell sx={{fontSize:'16px' , whiteSpace: 'nowrap'}} align='center'>{item.user.fullName}</TableCell> */}
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
                  } else if (item.status === 1) {
                    return <TableRow
                      key={item.roomId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{item.roomName}</TableCell>
                      <TableCell className='edit-images' sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}><img src={`data:image/jpeg;base64,${base64Image}`} alt="Images" /></TableCell>
                      <TableCell sx={{ fontSize: '16px' }}>{item.description}</TableCell>
                      <TableCell sx={{ fontSize: '16px' }}>{item.capacity}</TableCell>
                      <TableCell sx={{ fontSize: '16px' }}>{item.address}</TableCell>
                      <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }} align='center'>{item.price}</TableCell>
                      <TableCell sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{host.fullName}</TableCell>
                      {/* <TableCell sx={{fontSize:'16px' , whiteSpace: 'nowrap'}} align='center'>{item.user.fullName}</TableCell> */}
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
                  }

                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      );
    } else {
      return (
        <div>
          <ModalCreateRoom />
          <div className="alert-successful-error">

            <Stack sx={{ width: '100%' }} spacing={0}>
              <Alert severity="info" style={{ fontSize: '22px', justifyContent: 'center' }}>
                <AlertTitle style={{ fontSize: '30px', fontWeight: '600' }}>There is no rooms</AlertTitle>
                Please check your rooms before continuing to add new data.
              </Alert>
            </Stack>
          </div>
        </div>
      )
    }
  }
}

export default HostRoomTable