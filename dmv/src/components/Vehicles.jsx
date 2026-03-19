import { useState, useEffect } from 'react';

export default function Vehicles() {
  const [ output, setOutput ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/vehicles');
      const result = await response.json();
      setOutput(result)
    };
    fetchData();
  }, []);

  if (output.length < 1) return "Loading..."

  return (
    <div className='vehicle_container'>
      <h1>Probably as good as the real DMV</h1>
      <div>
        {output.map(vic => <div key={vic.id}>{vic.manufacturer} - {vic.model}</div>)}
      </div>
    </div>
  );
};