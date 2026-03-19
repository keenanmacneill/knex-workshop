import { useState, useEffect } from 'react';

export default function People() {
  const [ output, setOutput ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/people');
      const result = await response.json();
      setOutput(result)
    };
    fetchData();
  }, []);

  if (output.length < 1) return "Loading..."

  return (
    <div className='people_container'>
      <h1>Everyones info in the DMV is probably this secure...</h1>
      <div>
        {output.map(person => <div key={person.id}>{person.full_name} - {person.job_title} - {person.phone} </div>)}
      </div>
    </div>
  );
};