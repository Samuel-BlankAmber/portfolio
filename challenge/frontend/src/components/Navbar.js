import '../css/Navbar.css';

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('hire')}>Hire a Reindeer</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
