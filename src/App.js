import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import EmailSender from './EmailSender';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Errors from './Errors';
import Slider from '@mui/material/Slider';

var ename = false;
var esurname = false;
var ecompname = false;
var ecompsurname = false;

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

function sendEmail() {



	var response = fetch('https://api.mailjet.com/v3.1/send', {
		method: 'POST',
		mode: "no-cors",

		headers: {
			'Origin': 'https://manugc911.github.io/patriyedu/',
			'Content-Type': 'application/json',
			'Authorization': 'Basic ' + btoa('415618f33c5a0e19c80f139bdd43cfbe:ccf54f2a4661a313019ef3e695f55213')
		},
		body: JSON.stringify({
			'Messages': [
				{
					'From': {
						'Email': 'manugc911@proton.me',
						'Name': 'Me'
					},
					'To': [
						{
							'Email': 'manugc911@gmail.com',
							'Name': 'You'
						}
					],
					'Subject': 'My first Mailjet Email!',
					'TextPart': 'Greetings from Mailjet!',
					'HTMLPart': 'Dear passenger 1, welcome to Mailjet!May the delivery force be with you!'
				}
			]
		})
	});
	console.log(response);


}


function App() {

	const [open, setOpen] = React.useState(false);
	const handleOpen = (event) => {
		ename = false;
		esurname = false;
		ecompname = false;
		ecompsurname = false;
		if (fromName == "") {
			ename = true;
		}
		if (fromSurName == "") {
			esurname = true;
		}
		if (from_companion_confirmation == "true") {
			if (from_companionName == "") {
				ecompname = true;
			}
			if (from_companionSurName == "") {
				ecompsurname = true;
			}
		}
		if (ename == false && esurname == false && ecompname == false && ecompsurname == false) {
			setOpen(true);
		}
		else {
			document.querySelector("form").focus();
		}
		console.log(ename + " " + esurname + " " + ecompname + " " + ecompsurname)

	};
	const handleClose = () => setOpen(false);

	const [fromName, setfromName] = useState('');

	const name_handleInputChange = (event) => {
		setfromName(event.target.value);
	};

	const [fromSurName, setfromSurName] = useState('');
	const surName_handleInputChange = (event) => {
		setfromSurName(event.target.value);
	};

	const [companionDisabled, setcompanionDisabled] = useState(false);

	const [from_companion_confirmation, setfrom_companion_confirmation] = useState('false');

	const from_companion_confirmation_handleInputChange = (event) => {
		if (event.target.value == "true") {
			setfrom_companion_confirmation("false");
			setcompanionDisabled(true);
		}
		else {
			setfrom_companion_confirmation("true");
			setcompanionDisabled(false);
		}
	};

	const [from_companionName, setfrom_companionName] = useState('');
	const from_companionName_handleInputChange = (event) => {
		setfrom_companionName(event.target.value);
	};

	const [from_companionSurName, setfrom_companionSurName] = useState('');
	const from_companionSurName_handleInputChange = (event) => {
		setfrom_companionSurName(event.target.value);
	};

	const [busvalue, setBusValue] = React.useState([0]);

	const handleBus = (event, newValue) => {
		setBusValue(newValue);
	};

	const [bus_confirmation, setbus_confirmation] = useState('false');

	const bus_confirmation_handleInputChange = (event) => {
		if (event.target.value == "true") {
			setbus_confirmation("false");
			setBusValue(0);
		}
		else {
			setbus_confirmation("true");
			
			if(from_companion_confirmation=="true") {
				setBusValue(2);
			}else{
				setBusValue(1);
			}
		}
	};

	const [hotelvalue, setHotelValue] = React.useState([0]);

	const handleHotel = (event, newValue) => {
		setHotelValue(newValue);
	};
	const [hotel_confirmation, sethotel_confirmation] = useState('false');

	const hotel_confirmation_handleInputChange = (event) => {
		if (event.target.value == "true") {
			sethotel_confirmation("false");
			setHotelValue(0);
		}
		else {
			sethotel_confirmation("true");
			if(from_companion_confirmation=="true") {
				setHotelValue(2);
			}else{
				setHotelValue(1);
			}
		}
	};

	
	const [allergies, setallergies] = useState('');
	const allergies_handleInputChange = (event) => {
		setallergies(event.target.value);
	};

	const [vegan, setVegan] = useState('false');

	const vegan_handleInputChange = (event) => {
		if (event.target.value == "true") {
			setVegan("false");
		}
		else {
			setVegan("true");
		}
	};
	const [music_recomendation, setmusic_recomendation] = useState('');
	const music_recomendation_handleInputChange = (event) => {
		setmusic_recomendation(event.target.value);
	};
	useEffect(() => {
		setcompanionDisabled(true);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<div className='whiteSpace'>
					<span className='brittany'>
						Eduardo y Patricia
					</span>
				</div>
				<span className='anticdidone parrafo'>
					Hemos decidido unirnos en un enlace iónico más fuerte y, para celebrarlo,<br></br> queremos que nos acompañéis el próximo
				</span>
				<br></br>
				<span className='date'>
					27 | ABRIL | 2024
				</span>
				<br></br>
				<span className='anticdidone'>
					TORRE DE COTES, Alcoy (Alicante)
				</span>
				<span className='anticdidone'>
					Apertura de puertas a las 12:45 h
				</span>
				<span className='anticdidone'>
					La química une... y mucho
				</span>

			</header>



			<main>
				<form tabIndex="-1" validate='true' autoComplete='on'>
					<h3 >Confirma asistencia</h3>
					<div className="newRow">
						<TextField
							required
							id="Nombre"
							label="Nombre"
							value={fromName}
							fullWidth
							onChange={name_handleInputChange}
							helperText=""
						/>
						<TextField
							required
							id="Apellido"
							label="Apellidos"
							onChange={surName_handleInputChange}
							value={fromSurName}
							fullWidth
							helperText=""
						/>
					</div>
					<FormControlLabel
						id="Acomapañante"
						value={from_companion_confirmation}
						control={<Switch color="primary" />}
						defaultValue="false"
						label="Acomapañante"
						labelPlacement="start"
						onChange={from_companion_confirmation_handleInputChange}
					/>
					<div className="newRow">
						<TextField
							disabled={companionDisabled}
							required
							id="Nombre_acompañante"
							label="Nombre acompañante"
							onChange={from_companionName_handleInputChange}
							helperText=""
							fullWidth
							value={from_companionName}
						/>
						<TextField
							disabled={companionDisabled}
							required
							id="Apellido_acompañante"
							label="Appellidos acompañante"
							onChange={from_companionSurName_handleInputChange}
							helperText=""
							fullWidth
							value={from_companionSurName}
						/>
					</div>
					
					<FormControlLabel
						id="hotel_confirmation"
						value={hotel_confirmation}
						control={<Switch color="primary" />}
						label="¿Necesitas o quieres quedarte a dormir?"
						labelPlacement="start"
						defaultValue="false"
						onChange={hotel_confirmation_handleInputChange}
					/>
					<div>
						<span className='cuantas'>¿Cuántos sois? {hotelvalue}</span>
						<div className='slider'><Slider
							disabled={hotel_confirmation == "false"}
							getAriaLabel={() => '¿Cuantos sois?'}
							max={10}
							value={hotelvalue}
							onChange={handleHotel}
							valueLabelDisplay="¿Cuantos sois?"

						/></div>
					</div>
					<div className="newRow">
						<TextField
							id="alergia"
							label="¿Alergias, intolerancias o embarazo/lactancia?"
							onChange={allergies_handleInputChange}
							helperText="Indica el nombre de la persona."
							value={allergies}
							fullWidth
						/>
					</div>
					<FormControlLabel
						id="vegan"
						value={hotel_confirmation}
						control={<Switch color="primary" />}
						label="¿Eres vegano?"
						labelPlacement="start"
						defaultValue="false"
						onChange={vegan_handleInputChange}
					/>
					<div className="newRow">
						<TextField
							id="musica"
							label="¿Qué canciones te gustaría escuchar?"
							helperText=""
							multiline
							maxRows={8}
							fullWidth
							onChange={music_recomendation_handleInputChange}
							value={music_recomendation}
						/>
					</div>
					<div>

						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description">
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

								{from_companion_confirmation == "true" && (<React.Fragment>
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
								¿Necesitas o quieres quedarte a dormir? <span className='bold'>{hotel_confirmation == "true" ? "Si" : "No"}</span>
								</Typography>
								<Typography id="modal-modal-description" sx={{ mt: 1 }}>
									¿Cuántos sois? <span className='bold'>{hotelvalue}</span>
								</Typography>
								<Typography id="modal-modal-description" sx={{ mt: 1 }}>
									¿Alergias, intolerancias o embarazo/lactancia? <span className='bold'>{allergies == "" ? "Ninguna" : allergies}</span>
								</Typography>
								<Typography id="modal-modal-description" sx={{ mt: 1 }}>
									¿Eres vegano? <span className='bold'>{vegan == "true" ? "Si" : "No"}</span>
								</Typography>
								<Typography id="modal-modal-description" sx={{ mt: 1 }}>
									¿Que canciones te gustaria escuchar? <span className='bold'>{music_recomendation == "" ? "Me da igual" : music_recomendation}</span>
								</Typography>
								<br></br><br></br>
								<EmailSender fromName={fromName} fromSurName={fromSurName} from_companion_confirmation={from_companion_confirmation} from_companionName={from_companionName} from_companionSurName={from_companionSurName} vegan={vegan}  allergies={allergies} hotel_confirmation={hotel_confirmation} hotelvalue={hotelvalue} music_recomendation={music_recomendation}  ></EmailSender>

							</Box>
						</Modal>
					</div>
					<br></br>
					<Errors value={fromName == ""} additionalValue="true" fieldname="tu nombre"></Errors>
					<Errors value={fromSurName == ""} additionalValue="true" fieldname="tus apellidos"></Errors>
					<Errors value={from_companionName == ""} additionalValue={from_companion_confirmation} fieldname="el nombre de tu acompañante"></Errors>
					<Errors value={from_companionSurName == ""} additionalValue={from_companion_confirmation} fieldname="los apellidos de tu acompañante"></Errors>
					<br></br>
					<div className='confirmarbtn'>
						<Button onClick={handleOpen}>Confirmar</Button>
					</div>
				</form>

			</main>
			<footer>
				<div className='footerLeft'>
					<span className='bold'>Patricia</span>
					<span>618 32 30 09</span>
				</div>
				<div className='footerRight'>
					<span className='bold'>Eduardo</span>
					<span>618 04 02 64</span>
				</div>
			</footer>
		</div>

	);
}

export default App;
