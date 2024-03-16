import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import warning from '../Assets/warning.png';
import './Error.css'

const Errors = () => {
  return (
    <div className="alert-warning-error" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  marginLeft: 200, marginTop: 50}}>
    <Stack sx={{ width: '100%' }} spacing={0}>
            <img src={warning} alt='' style={{width: "30%", height: '30%', marginLeft: 390}}/>
        <Alert severity="warning" style={{ fontSize: 22, justifyContent: 'center', backgroundColor: 'white'}}>
            <AlertTitle style={{ fontSize: 30 , fontWeight: '600', textAlign: 'center' }}>There are some problems here</AlertTitle>
            <span style={{marginLeft: 100, fontSize:30 }}>Please check again!</span>
        </Alert>
    </Stack>
</div>
  );
};

export default Errors;
