import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
var data = {};

const EmailSender = ({ fromName, fromSurName, from_companion_confirmation, from_companionName, 
    from_companionSurName, bus_confirmation,allergies,hotel_confirmation,music_recomendation }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    function sendEmail() {
        




        data = {
            service_id: 'service_qq24ksv',
            template_id: 'template_ea0gcgr',
            user_id: 'YZViRN9m5r1G0p3jB',
            template_params: {
                'username': 'Manu',
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
                'from_name': fromName.toString(),
                'from_surName': fromSurName.toString(),
                'from_companion_confirmation': from_companion_confirmation.toString(),
                'from_companionName': from_companionName.toString(),
                'from_companionSurName': from_companionSurName.toString(),
                'bus_confirmation': bus_confirmation.toString(),
                'allergies': allergies.toString(),
                'hotel_confirmation': hotel_confirmation.toString(),
                'music_recomendation': music_recomendation.toString(),
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
            })
            .fail(function (error) {
                if (data != {}) {
                    console.log('Oops... ' + JSON.stringify(error));
                }
            });
    }

    return (
        <React.Fragment>
        <div>
      <Button type="submit" onClick={handleOpen}>Confirmar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className="title" variant="h5" component="h2">
            Confirma tus datos
          </Typography>
          <br></br><br></br>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Nombre:<span className='bold'>{fromName}</span> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Apellidos: <span className='bold'>{fromSurName}</span>
          </Typography>

          {from_companion_confirmation=="true" && ( <React.Fragment>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Acompañante
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Nombre: <span className='bold'>{from_companionName}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Apellidos: <span className='bold'>{from_companionSurName}</span>
          </Typography></React.Fragment>)}
          
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            ¿Quieres una plaza en el autobus? <span className='bold'>{bus_confirmation=="true"?"Si":"No"}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            ¿Te quedas a dormir en el hotel? <span className='bold'>{hotel_confirmation=="true"?"Si":"No"}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            ¿Tienes alguna alergia? <span className='bold'>{allergies==""?"Ninguna":allergies}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            ¿Que música te gustaria escuchar? <span className='bold'>{music_recomendation==""?"Me da igual":music_recomendation}</span>
          </Typography>

          <br></br><br></br>
          <Button className="btn_SendEmail" variant="contained" type="submit" onClick={sendEmail}>Enviar Confirmacion</Button>
        </Box>
      </Modal>
    </div>
            
        </React.Fragment>

    );
};

export default EmailSender;