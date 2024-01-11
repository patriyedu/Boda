import React, { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Person = () => {
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
    const [fromName, setfromName] = useState('');

	const name_handleInputChange = (event) => {
		setfromName(event.target.value);
		//people[0].name = event.target.value;
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

			if (from_companion_confirmation == "true") {
				setBusValue(2);
			} else {
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
			if (from_companion_confirmation == "true") {
				setHotelValue(2);
			} else {
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

	

    return(
        <section>
								<div>Asistente </div>
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
									id="hotel_confirmation"
									value={hotel_confirmation}
									control={<Switch color="primary" />}
									label="¿Necesitas o quieres quedarte a dormir?"
									labelPlacement="start"
									defaultValue="false"
									onChange={hotel_confirmation_handleInputChange}
								/>
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
							</section>
    )
};

export default Person;