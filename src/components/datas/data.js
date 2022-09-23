import React from "react";
import { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DataTable from 'react-data-table-component';


function App() {
        //getter      //setter
const [displayItems, setDisplayItems] = useState("");
    
const columns = [
    {
        name: '_id',
        selector: row => row._id,
    },
    {
        name: 'Fistname',
        selector: row => row.name,
    },
    {
        name: 'Lastname',
        selector: row => row.lastName,
    },
];

const data = displayItems;


    //GET Request
    const axiosGet = () => {

        axios
            .get("http://localhost:32/data",)
            .then(function(responseObject) {
                const users = responseObject.data;
                setDisplayItems(users);
            })
            .catch((err) => console.error(err));
    }

    console.table(displayItems);

    const listName = displayItems;
    console.log(listName);


    return(

        <Box>
            <DataTable
            columns={columns}
            data={data}
        />
            <Button onClick={axiosGet}>Get Data</Button>
        </Box>

    );
}

export default App;