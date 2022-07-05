import React from "react";
import { useState } from "react";
import '/Users/rogenbarrow/Documents/Projects/data-dsp/data-app-dsp/src/css/form.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {

    const [fullname, setFullname] = useState({
        firstName: "",
        lastName: ""
    })

    const axiosPost = () => {
        const requestData = JSON.stringify(fullname);
        axios
            .post("http://localhost:32/user", requestData)
            .then(({ data }) => console.log(data))
            .catch((err) => console.error(err));
    }

    
    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;

        setFullname(prevValue => {
            if (inputName === "firstname") {
                return {
                    firstName: newValue,
                    lastName:   prevValue
                }
            } else if (inputName === "lastname") {
                return {
                    firstName: prevValue,
                    lastName: newValue
                }
            }
        })
        
        //console.log(fullname);
        console.log(newValue);
        //console.log(inputName);
        //console.log(setFullname);
    };

    const newData = JSON.stringify(fullname);

    const handleClick = newData => {

        fetch("http://localhost:32/user", {
            method: 'POST',
            headers: { 'Content-Type': 'text/html' },
            body: fullname
        });
        
    };
    
    
    return(
    <Box
    marginTop={35}
    display= "block"

    >
        <form onSubmit={setFullname}>
        <TextField id="standard-basic" label="Firstname" variant="standard" name="firstname" onChange={handleChange} />
        <TextField id="standard-basic" label="Lastname" variant="standard" name="lastname" onChange={handleChange} />
        <Button variant="outlined" onClick={axiosPost}>Submit</Button>
        </form>
    </Box>
    );
}

export default App;