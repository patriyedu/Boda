import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default class Person1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            name: '',
            surname: '',
            hotel: false,
            allergies: '',
            vegan: false,
            music: ''

        };
        // this.updateState = this.updateState.bind(this);

    }

    render() {
        const { ...otherAttributes } = this.props;
        const callAddPerson = (event) => {
            event.preventDefault();
            let person = {
                name: this.state.name,
                surname: this.state.surname,
                hotel: this.state.hotel,
                allergies: this.state.allergies,
                vegan: this.state.vegan,
                music: this.state.music,
                number: otherAttributes.number
            };
            otherAttributes.addPerson(person);
        };
        

        const callUpdateName = (event) => {
            this.setState({ name: event.target.value });
        }
        const callUpdateSurName = (event) => {
            this.setState({ surname: event.target.value });
        }
        const callUpdateHotel = (event) => {
            this.setState({ hotel: this.state.hotel==false?true:false });
        }
        const callUpdateAllergies = (event) => {
            this.setState({ allergies: event.target.value });
        }
        const callUpdateVegan = (event) => {
            this.setState({ vegan: this.state.vegan==false?true:false });
        }
        const callUpdateMusic = (event) => {
            this.setState({ music: event.target.value });
        }
        return (
            <section>
                <div className='asistenteText'>Asistente {otherAttributes.number+1}</div>
                <div className="newRow">
                    <TextField
                        required
                        id={"Nombre"+otherAttributes.number}
                        label="Nombre"

                        fullWidth
                        onChange={callUpdateName}
                        onBlur={callAddPerson}
                        helperText=""
                    />

                    <TextField
                        required
                        id="Apellido"
                        label="Apellidos"
                        fullWidth
                        onChange={callUpdateSurName}
                        onBlur={callAddPerson}
                        helperText=""
                    />
                </div>
                <FormControlLabel
                    id="hotel_confirmation"
                    value="false"
                    control={<Switch color="primary" />}
                    onChange={callUpdateHotel}
                    label="¿Necesitas o quieres quedarte a dormir?"
                    labelPlacement="start"
                    defaultValue="false"
                    onBlur={callAddPerson}
                />
                <div className="newRow">
                    <TextField
                        id="alergia"
                        label="¿Alergias, intolerancias o embarazo/lactancia?"
                        onBlur={callAddPerson}
                        helperText=""
                        onChange={callUpdateAllergies}
                        fullWidth
                    />
                </div>
                <FormControlLabel
                    id="vegan"
                    onChange={callUpdateVegan}
                    control={<Switch color="primary" />}
                    label="¿Eres vegano?"
                    labelPlacement="start"
                    defaultValue="false"
                    onBlur={callAddPerson}
                />
                <div className="newRow">
                    <TextField
                        id="musica"
                        label="¿Qué canciones te gustaría escuchar?"
                        helperText=""
                        multiline
                        maxRows={8}
                        fullWidth
                        onChange={callUpdateMusic}
                        onBlur={callAddPerson}
                    />
                </div>


            </section>
        )
    }
};

