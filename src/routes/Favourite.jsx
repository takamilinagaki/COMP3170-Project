import { Link } from "react-router-dom";
import "./HomePage.css"

export default function Favourite() {
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
          <p className="filterFont">Your Favourites</p>
    </div>

    <div className="searchResults">
         <div className="cards">
         <div className='card'>
          <div className='cardImage'>
            <img 
              src=""
              alt=""
              width={210}
              height={230}/>
          </div>
          <p className='dishName'>Recipe</p>
        </div>
        <div className='card'>
          <div className='cardImage'>
            <img 
              src=""
              alt=""
              width={210}
              height={230}/>
          </div>
          <p className='dishName'>Recipe</p>
        </div>
        <div className='card'>
          <div className='cardImage'>
            <img 
              src=""
              alt=""
              width={210}
              height={230}/>
          </div>
          <p className='dishName'>Recipe</p>
        </div>
        <div className='card'>
          <div className='cardImage'>
            <img 
              src=""
              alt=""
              width={210}
              height={230}/>
          </div>
          <p className='dishName'>Recipe</p>
        </div>
        <div className='card'>
          <div className='cardImage'>
            <img 
              src=""
              alt=""
              width={210}
              height={230}/>
          </div>
          <p className='dishName'>Recipe</p>
        </div>
        <div className='card'>
          <div className='cardImage'>
            <img 
              src=""
              alt=""
              width={210}
              height={230}/>
          </div>
          <p className='dishName'>Recipe</p>
        </div>
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

