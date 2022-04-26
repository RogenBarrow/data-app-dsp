import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);



useEffect(() => {
  setLoading(true);
  fetch('http://localhost:32/data')
    .then((res) => res.json())
    .then((actualData) => {
      const stringOfData = JSON.stringify(actualData);
      setData(stringOfData);
   })
   .catch((err) => {
    setError(err.message);
    setData(null);
  })
  .finally(() => {
    setLoading(false);
  });
}, []);



return <div className="App">
<h1>API Test</h1>
<div>{ data }</div>
</div>
}

//If statement for loading & error