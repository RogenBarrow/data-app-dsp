import React from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function App() {

    
    //GET Request
    const axiosGet = () => {

        axios
            .get("http://localhost:32/data",)
            .then(function(data) {
                console.log(data)
            })
            .catch((err) => console.error(err));
    }


    return(

        <Box>
            <Button onClick={axiosGet}>Get Data</Button>
        </Box>

    );
}

export default App;