import { Link } from "react-router-dom";
import "./HomePage.css"
import { useEffect, useState } from "react";

export default function HomePage() {

  const [recipes, setRecipes] = useState([]);


  useEffect (() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    async function getRecipes(){
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
    }
    getRecipes();
  },[]);


  return (
    <div className="App">

      <div className="homePageTopSection">
        <div className="navBar">
        <div className="topBarBody">
            <div>
                <p className="logo">Cookiy</p>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="Favourite">Favourite</Link>
            </div>
        </div>
        </div>
         <h1>Find Your Favourite Recipe</h1>
      </div>

<div className="bottomSection"> 
   <div className="searchings">
          <p className="filterFont">Filter</p>

            <div className="searchBar">     

              <input
              className="searchInput"
              type="text"
              placeholder='Search up Recipes...'/>

              <button 
              type="submit"
              className="searchGo">GO</button>

            </div>


           
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
    

        {recipes.map((recipe) => (
          <div className = "card" key={recipe.idMeal}>
            <div className="cardImage">
              <img 
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width = {210}
                height = {230}
              />
              </div>
              <p className="dishName">{recipe.strMeal}</p>
          </div>
        ))}
      
         </div>
    </div>
</div>
<div style={{
            width:'100%',
            height: '80px',
            backgroundColor: '#FEBD2D',
            fontSize: '16px',
            textAlign: 'center',
            alignSelf: 'center'
        }}>
          <p style={{fontSize: 26}}>Created By Jerry, Kyle, Takami😆</p>
        </div>

    </div>
  );
}

