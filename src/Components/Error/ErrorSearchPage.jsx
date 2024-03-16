import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import error from '../Assets/error_404.png';
import './ErrorSearchPage.css'

const ErrorSearchPage = () => {
  return (
    <div className="alert-successful-error" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  marginLeft: 190, marginTop: 50}}>
    <Stack sx={{ width: '100%' }} spacing={0}>
            <img src={error} alt='' style={{width: "30%", height: '30%', marginLeft: 400}}/>
        <Alert severity="info" style={{ fontSize: '22px', justifyContent: 'center', backgroundColor: 'white', marginRight: 50}}>
            <AlertTitle style={{ fontSize: '30px', fontWeight: '600', textAlign: 'center' }}>Can not find this service or room</AlertTitle>
            Please check other services or room.
        </Alert>
    </Stack>
</div>
  );
};

export default ErrorSearchPage;
