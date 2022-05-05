import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function fetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    
useEffect( () => {
      setLoading(true);
      axios('http://localhost:32/data')
        .then((res) => res.json())
        .then((actualData) => {
          const stringOfData = JSON.stringify(actualData);
          setData(stringOfData);
       })
       .catch((err) => {
        setError(err.message);
        setData(null);
        if (error)
        return "Error!";
      })
      .finally(() => {
        setLoading(false);
        If (loading) 
        return "Loading....";
      });
    }, []);

    return (<div className="App">
<h1>API Test</h1>
<div>{ data }</div>
</div>
);
}