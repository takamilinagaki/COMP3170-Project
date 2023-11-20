import './style.css';

export default function TopBar(navigation){
    return(
        <div className="topBarBody">
            <div>
                <p className="logo">Cookiy</p>
            </div>
            <div>
                <a href="#Favoruite">Home</a>
                <a href="" onClick={() => navigation.navigate('Favourite')}>Favourite</a>
            </div>
        </div>
    )
}