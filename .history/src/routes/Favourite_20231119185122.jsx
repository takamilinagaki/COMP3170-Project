import React from 'react';
import './App.css';
import TopBar from './components/NavBar';
import Card from './components/Card';
import ButtonBar from './components/ButtonBar';

export default function App() {
  const handleEditFilter = () => {
    console.log('Edit Filter button clicked');
  };

  return (
    <div className="App">
      <div>
        <div className="navBar">
          <TopBar />
        </div>
      </div>

      <div className="topSection">
        <button className="editFilterButton" onClick={handleEditFilter}>
          Edit Filter
        </button>
      </div>

      <div className="bottomSection">
        <div className="searchResults">
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <ButtonBar />
    </div>
  );
}
