import { useEffect } from 'react';
import './App.css';

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => 
    fetch()
)