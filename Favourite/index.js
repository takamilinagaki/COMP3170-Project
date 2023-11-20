import './App.css';
import TopBar from './components/NavBar';
import Card from './components/Card';
import ButtonBar from './components/ButtonBar'

export default function Favoruite() {
  return (
    <div className="Favourite">

      <div className="homePageTopSection">
        <div className="navBar">
         <TopBar />
        </div>
         <h1>Find Your Favoruite Recipe</h1>
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


