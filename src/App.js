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

	const [bus_confirmation, setbus_confirmation] = useState('false');

	const bus_confirmation_handleInputChange = (event) => {
		if (event.target.value == "true") {
			setbus_confirmation("false");
		}
		else {
			setbus_confirmation("true");
		}
	};

	const [allergies, setallergies] = useState('');
	const allergies_handleInputChange = (event) => {
		setallergies(event.target.value);
	};

	const [hotel_confirmation, sethotel_confirmation] = useState('false');

	const hotel_confirmation_handleInputChange = (event) => {
		if (event.target.value == "true") {
			sethotel_confirmation("false");
		}
		else {
			sethotel_confirmation("true");
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
				<span>
					Eduardo y Patricia
				</span>
				<span>
					Hemos decidio unirnos en un enlace iónico más fuerte y para celebrarlo, queremos que nos acompañeis el proximo. 
				</span>
				<br></br>
				<span>
					27 | ABRIL | 2024
				</span>
				<br></br>
				<span>
					TORRE DE COTES, Alcoy (Alicante)
				</span>
				<span>
					Apertura de puertas a las 12:45 h
				</span>
				<span >Confirma asistencia</span>
			</header>



			<main>
				<form>

					<div className="newRow">
						<TextField
							required
							id="outlined-required"
							label="Nombre"
							value={fromName}
							onChange={name_handleInputChange}
							helperText="Ej.Patricia"
						/>
						<TextField
							required
							id="outlined-required"
							label="Apellido/s"
							onChange={surName_handleInputChange}
							value={fromSurName}
							helperText="Ej.Garcia"
						/>
					</div>
					<FormControlLabel
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
							id="outlined-required"
							label="Nombre acompañante"
							onChange={from_companionName_handleInputChange}
							helperText="Ej.Eduardo"
							value={from_companionName}
						/>
						<TextField
							disabled={companionDisabled}
							required
							id="outlined-required"
							label="Appellido/s acompañante"
							onChange={from_companionSurName_handleInputChange}
							helperText="Ej.Gisbert"
							value={from_companionSurName}
						/>
					</div>
					<FormControlLabel
						value={bus_confirmation}
						control={<Switch color="primary" />}
						label="¿Quieres una plaza en el autobus?"
						labelPlacement="start"
						defaultValue="false"
						onChange={bus_confirmation_handleInputChange}
					/>
					<FormControlLabel
						value={hotel_confirmation}
						control={<Switch color="primary" />}
						label="¿Te quedas a dormir en el hotel?"
						labelPlacement="start"
						defaultValue="false"
						onChange={hotel_confirmation_handleInputChange}
					/>

					<div className="newRow">
						<TextField
							id="outlined"
							label="¿Tienes alguna alergia?"
							onChange={allergies_handleInputChange}
							helperText="Ej.Al pescao"
							value={allergies}
						/>
					</div>

					<div className="newRow">
						<TextField
							id="outlined-multiline-flexible"
							label="¿Que música te gustaria escuchar?"
							helperText="Ej.Jazz"
							multiline
							maxRows={8}
							onChange={music_recomendation_handleInputChange}
							value={music_recomendation}
						/>
					</div>

					<EmailSender fromName={fromName} fromSurName={fromSurName} from_companion_confirmation={from_companion_confirmation} from_companionName={from_companionName} from_companionSurName={from_companionSurName} bus_confirmation={bus_confirmation} allergies={allergies} hotel_confirmation={hotel_confirmation} music_recomendation={music_recomendation}  ></EmailSender>
				</form>

			</main>
			<footer>
				<div className='footerLeft'>
				<span className='bold'>Patricia</span>
				<span>666 66 66 66</span>
				</div>
				<div className='footerRight'>
				<span className='bold'>Eduardo</span>
				<span>666 66 66 66</span>
				</div>
			</footer>
		</div>
	
	);
}

export default App;
