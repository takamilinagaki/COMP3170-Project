import React from 'react';


export default function Favourite() {
  const handleEditFilter = () => {
    console.log('Edit Filter button clicked');
  };

  return (
    <div className="App">
      <div>
        <div className="navBar">

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

          </div>
        </div>
      </div>


    </div>
  );
}
