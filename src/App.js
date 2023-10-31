import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // POST request
  const [clonedResult, setClonedResult] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const request = new Request('https://reqres.in/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'POST request that is not cloned' })
    });

    const clonedRequest = new Request('https://reqres.in/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'POST request that is cloned' })
    }).clone();


    fetch(clonedRequest)
      .then(response => response.json())
      .then(result => setClonedResult(result));

    fetch(request)
      .then(response => response.json())
      .then(result => setResult(result));
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          original
        </p>
        <p>
          {JSON.stringify(result, null, 2)}
        </p>
        <p>
          cloned
        </p>
        <p>
          {JSON.stringify(clonedResult, null, 2)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
