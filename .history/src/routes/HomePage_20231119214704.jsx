import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="App">
        <Link to="/">Home</Link>
        <Link to="Favourite">Favourite</Link>
      <div className="homePageTopSection">
        <div className="navBar">
        <div style={{
            width:'100%',
            height: '80px',
            backgroundColor: '#FEBD2D',
            fontSize: '16px',
            textAlign: 'center',
            alignSelf: 'center'
        }}>
        </div>
        </div>
         <h1>Find Your Favourite Recipe</h1>
      </div>

<div className="bottomSection"> 
   <div className="searchings">
          <p className="filterFont">Filter</p>
          <input 
           className="searchInput"
           type="text"
           placeholder='  Search up Recipes...'/>
           
           <input 
           className="sort"
           placeholder='  Sort by'
           />
    </div>

    <div className="searchResults">
         <div className="filterButtons">
          <button>Italian</button>
          <button>Asian</button>
          <button>Greek</button>
          <button>American</button>
         </div>

         <div className="cards">

         </div>
    </div>
</div>


    </div>
  );
}


