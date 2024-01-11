<FormControlLabel
                    id="hotel_confirmation"
                    value={otherAttributes.person.name}
                    control={<Switch color="primary" />}
                    label="¿Necesitas o quieres quedarte a dormir?"
                    labelPlacement="start"
                    defaultValue="false"
                />
                <div className="newRow">
                    <TextField
                        id="alergia"
                        label="¿Alergias, intolerancias o embarazo/lactancia?"
                       
                        helperText="Indica el nombre de la persona."
                        value={otherAttributes.person.name}
                        fullWidth
                    />
                </div>
                <FormControlLabel
                    id="vegan"
                    value={otherAttributes.person.name}
                    control={<Switch color="primary" />}
                    label="¿Eres vegano?"
                    labelPlacement="start"
                    defaultValue="false"
                />
                <div className="newRow">
                    <TextField
                        id="musica"
                        label="¿Qué canciones te gustaría escuchar?"
                        helperText=""
                        multiline
                        maxRows={8}
                        fullWidth
                        value={otherAttributes.person.name}
                    />
                </div>