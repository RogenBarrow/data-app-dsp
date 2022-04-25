import { useEffect } from 'react';
import './App.css';

export default function App() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch().then((response) => console.log(response));
  }, []);

return <div className="App"></div>
}