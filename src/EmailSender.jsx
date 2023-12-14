import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import Button from '@mui/material/Button';




var data = {};

const EmailSender = ({ fromName, fromSurName, from_companion_confirmation, from_companionName, 
    from_companionSurName, bus_confirmation,busvalue,allergies,hotel_confirmation,hotelvalue,music_recomendation }) => {

    
    
    function sendEmail() {

        let companion_confirm= from_companion_confirmation.toString()=="true"?"Si":"No";
        let bus_confirm= bus_confirmation.toString()=="true"?"Si":"No";
        let hotel_confirm= hotel_confirmation.toString()=="true"?"Si":"No";
        let music= music_recomendation.toString()==""?"N/A":music_recomendation.toString();
             data = {
            service_id: 'service_qq24ksv',
            template_id: 'template_ea0gcgr',
            user_id: 'YZViRN9m5r1G0p3jB',
            template_params: {
                'username': 'Manu',
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
                'from_name': fromName.toString(),
                'from_surName': fromSurName.toString(),
                'from_companion_confirmation': companion_confirm.toString(),
                'from_companionName': from_companionName.toString(),
                'from_companionSurName': from_companionSurName.toString(),
                'bus_confirmation': bus_confirm.toString(),
                'busvalue': busvalue.toString(),
                'allergies': allergies.toString(),
                'hotel_confirmation': hotel_confirm.toString(),
                'hotelvalue':hotelvalue.toString(),
                'music_recomendation': music.toString(),
                'message': 'my message',
                'to_name': 'Edu y Patri'
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        })
            .done(function () {
                console.log('Your mail is sent!');
                window.location.reload();
            })
            .fail(function (error) {
                if (data != {}) {
                    console.log('Oops... ' + JSON.stringify(error));
                }
            });
    }

    return (
        <React.Fragment>
        <Button  className="btn_SendEmail" variant="contained"  onClick={sendEmail}>Enviar Confirmacion</Button>
        </React.Fragment>
    );
};

export default EmailSender;