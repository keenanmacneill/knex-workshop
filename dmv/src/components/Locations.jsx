import { useState, useEffect } from 'react';

export default function Locations() {
  const [ output, setOutput ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/locations');
      const result = await response.json();
      setOutput(result)
    };
    fetchData();
  }, []);

  if (output.length < 1) return "Loading..."

  return (
    <div className='vehicle_container'>
      <h1>Everyone's addresses? ish...</h1>
      <div>
        {output.map(loc => <div key={loc.id}>{loc.state} - {loc.city}</div>)}
      </div>
    </div>
  );
};