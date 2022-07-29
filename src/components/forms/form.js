import React from "react";
import { useState } from "react";
import '/Users/rogenbarrow/Documents/Projects/data-dsp/data-app-dsp/src/css/form.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);

    const axiosPost = () => {

    
        if (!firstName) {
            return;
        }
        if (!lastName) {
            return;
        };

        
        const requestData = {
            name: firstName,
            lastName: lastName,
        };

        axios
            .post("http://localhost:32/user", requestData)
            .then(({ data }) => console.log(data))
            .catch((err) => console.error(err));
    }
    
    
    return(
        <Box
            marginTop={35}
            display= "block"
        >
            <form onSubmit={axiosPost}>
            <TextField id="standard-basic" label="Firstname" variant="standard" name="firstname" onChange={handleFirstNameChange} />
            <TextField id="standard-basic" label="Lastname" variant="standard" name="lastname" onChange={handleLastNameChange} />
            <Button variant="outlined" onClick={axiosPost}>Submit</Button>
            </form>
        </Box>
    );
}

export default App;