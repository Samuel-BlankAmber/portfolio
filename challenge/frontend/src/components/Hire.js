import { useState } from 'react';
import '../css/Page.css';
import '../css/Hire.css';

function Hire() {
  let [reindeerList, setReindeerList] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');

  async function search() {
    const res = await fetch('api/reindeer?filter=' + searchTerm);
    setReindeerList(await res.json());
  }

  function hireRequest(reindeer) {
    alert(`Request to hire ${reindeer} sent!`);
  }

  return (
    <div className="page">
      <div className="searchBar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Dasher"
        />
        <button onClick={search}>Search</button>
      </div>
      <div>
        <h1>Reindeer for Hire</h1>
        <ul className="reindeerList">
          {reindeerList.length === 0 && <h2>No reindeer found with that name!</h2>}
          {
            reindeerList.map((reindeer) => (
              <li key={reindeer}>
                <h2>{reindeer}</h2>
                <button onClick={() => hireRequest(reindeer)}>Hire</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Hire;
