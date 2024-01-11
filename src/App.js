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
import Person from './Person';
import Person1 from './Person1';
import $ from 'jquery'; // Import jQuery
import { toast, ToastContainer } from 'react-toastify'

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




var person = {
	name: '',
	surname: '',
	hotel: '',
	allergies: '',
	vegan: '',
	music: '',
	number: 0
}
var people = [person, person, person, person, person];

function sendEmail(event) {
	event.preventDefault();
	let data = {};
	data = {
		service_id: 'service_qq24ksv',
		template_id: 'template_a8dl0fs',
		user_id: 'YZViRN9m5r1G0p3jB',
		template_params: {
			'username': 'Manu',
			'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
			'name1': people[0].name,
			'surname1': people[0].surname,
			'vegan1': people[0].vegan,
			'allergies1': people[0].allergies,
			'hotel1': people[0].hotel,
			'music1': people[0].music,

			'name2': people[1].name,
			'surname2': people[1].surname,
			'vegan2': people[1].vegan,
			'allergies2': people[1].allergies,
			'hotel2': people[1].hotel,
			'music2': people[1].music,

			'name3': people[2].name.toString(),
			'surname3': people[2].surname.toString(),
			'vegan3': people[2].vegan.toString(),
			'allergies3': people[2].allergies.toString(),
			'hotel3': people[2].hotel.toString(),
			'music3': people[2].music.toString(),

			'name4': people[3].name.toString(),
			'surname4': people[3].surname.toString(),
			'vegan4': people[3].vegan.toString(),
			'allergies4': people[3].allergies.toString(),
			'hotel4': people[3].hotel.toString(),
			'music4': people[3].music.toString(),

			'name5': people[4].name.toString(),
			'surname5': people[4].surname.toString(),
			'vegan5': people[4].vegan.toString(),
			'allergies5': people[4].allergies.toString(),
			'hotel5': people[4].hotel.toString(),
			'music5': people[4].music.toString()
		}
	};
	console.log(data.template_params);

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
function increment() {
	console.log("miauuu")
	toast('miauuuuuuu');
}


function App() {

	const [open, setOpen] = React.useState(false);
	const handleOpen = (event) => {
		/*ename = false;
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
		//console.log(ename + " " + esurname + " " + ecompname + " " + ecompsurname)
*/
	};
	const handleClose = () => setOpen(false);
	/*
		const [person, setPerson] = React.useState([]);
		const handlePerson = () => {
			//people.push(person);
			setPerson(
				person = {
					name: '',
					surname: '',
					hotel: '',
					allergies: '',
					vegan: '',
					music: ''
				}
			);
	
		};
	*/


	const addPerson = (person) => {
		if (people.length <= person.number) {
			people.push(person);
		}
		else {
			people[person.number] = person;
		}

	}
	const [peopleNum, setPeopleNum] = React.useState(1);

	const incrementPeople = () => {
		if (peopleNum < 5) {
			setPeopleNum(peopleNum + 1);

			setTimeout(() => {
				document.getElementById("Nombre" + peopleNum).focus();
			}, 200)
		} else {

			toast('Máximo 5 asistentes');
		}

	}




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
			<h3 >¿Donde se celebra?</h3>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2995908488037!2d-0.4806974234437006!3d38.71093017176449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6186434820c017%3A0xf9305f256ae7e6e8!2sRestaurante%20Torre%20de%20Cotes!5e0!3m2!1ses!2ses!4v1704978022935!5m2!1ses!2ses" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

			<main>
				<div tabIndex="-1" validate='true' autoComplete='on' id="form">

					<h3 >Confirma asistencia</h3>
					{Array.from({ length: peopleNum }, (_, i) =>

						<Person1 addPerson={addPerson} key={i} number={i}></Person1>
					)}

					<div className='addPersonbtn'>
						<Button onClick={incrementPeople}>Añadir Acompañante</Button>

					</div>
					<div>
						{/*
						

name3={name3} surName3={surName3} vegan3={vegan3} allergies3={allergies3} hotel3={hotel3} music3={music3}
					name4={name4} surName4={surName4} vegan4={vegan4} allergies4={allergies4} hotel4={hotel4} music4={music4}
					name5={name5} surName5={surName5} vegan5={vegan5} allergies5={allergies5} hotel5={hotel5} music5={music5}

						<EmailSender fromName={fromName} fromSurName={fromSurName} from_companion_confirmation={from_companion_confirmation} from_companionName={from_companionName} from_companionSurName={from_companionSurName} vegan={vegan} allergies={allergies} hotel_confirmation={hotel_confirmation} hotelvalue={hotelvalue} music_recomendation={music_recomendation}  ></EmailSender>
<EmailSender fromName={fromName} fromSurName={fromSurName} from_companion_confirmation={from_companion_confirmation} from_companionName={from_companionName} from_companionSurName={from_companionSurName} vegan={vegan} allergies={allergies} hotel_confirmation={hotel_confirmation} hotelvalue={hotelvalue} music_recomendation={music_recomendation}  ></EmailSender>

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
								<EmailSender fromName={fromName} fromSurName={fromSurName} from_companion_confirmation={from_companion_confirmation} from_companionName={from_companionName} from_companionSurName={from_companionSurName} vegan={vegan} allergies={allergies} hotel_confirmation={hotel_confirmation} hotelvalue={hotelvalue} music_recomendation={music_recomendation}  ></EmailSender>

							</Box>
						</Modal>
						
					</div>
					<br></br>
					<Errors value={fromName == ""} additionalValue="true" fieldname="tu nombre"></Errors>
					<Errors value={fromSurName == ""} additionalValue="true" fieldname="tus apellidos"></Errors>
					<Errors value={from_companionName == ""} additionalValue={from_companion_confirmation} fieldname="el nombre de tu acompañante"></Errors>
					<Errors value={from_companionSurName == ""} additionalValue={from_companion_confirmation} fieldname="los apellidos de tu acompañante"></Errors>
					<br></br>*/}
						<div className='confirmarbtn'>
							<Button variant='contained' onClick={sendEmail}>Enviar</Button>
						</div>
					</div>
				</div>
				<ToastContainer></ToastContainer>
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
