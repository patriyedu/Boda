import React, { useEffect } from 'react';

import Button from '@mui/material/Button';




var data = {};

const EmailSender = ({ sendEmail}) => {

    const CallSendEmail = ()=>{
        sendEmail();
    }
    

    return (
        <React.Fragment>
        <Button  className="btn_SendEmail" variant="contained"  onClick={CallSendEmail}>Enviar Confirmacion</Button>
        </React.Fragment>
    );
};

export default EmailSender;