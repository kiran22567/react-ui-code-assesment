import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import './App.css';
import Repotable from './components/Repotable';
import { getRepo } from './Service';

function App() {
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const logoRef = useRef();

  useEffect(() => {
    getRepo()
      .then(res => {
        setRepoList(res);
        setLoading(false);
      })
  }, []);

  return (
    <div className="App">
      <header>
        <strong className="app-title">Repo List View</strong>
      </header>
      <main className="container">
        {!!loading && <img src="/ajax-loader.gif" />}
        {!loading && <Repotable repoList={repoList} data-testid="repotable" />}
      </main>
    </div>
  );
}

export default App;
