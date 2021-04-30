import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Repotable from './components/Repotable';
import {getRepo} from './Service';

function App() {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    getRepo()
      .then(res => res.json())
      .then(res => {
        setRepoList(res);
      })
  }, []);

  return (
    <div className="App">
      <header>
        <strong className="app-title">Repo List View</strong>
      </header>
      <main className="container">
        <Repotable repoList={repoList} data-testid="repotable" />
      </main>
    </div>
  );
}

export default App;
