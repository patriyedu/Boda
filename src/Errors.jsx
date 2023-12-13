import React, { useEffect } from 'react';
import Button from '@mui/material/Button';




const Errors = ({ value, additionalValue, fieldname }) => {
    console.log(value+"  "+additionalValue);
    console.log(typeof value+"  "+ typeof additionalValue);
    
    if (value==true & additionalValue=='true') {
        console.log("IN");
        return (
                <div className='error'>
                    Rellena {fieldname}
                </div>
           
        );
    }
    else {
        return (<span></span>);
    }
};

export default Errors;