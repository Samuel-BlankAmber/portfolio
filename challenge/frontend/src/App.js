import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hire from './components/Hire';
import './css/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'hire':
        return <Hire />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
