import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
  fetch('http://localhost:32/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    return response.json();
  })
   .then((actualData) => console.log(actualData))
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
{loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
      
      </ul>
</div>
}
