import './style.css';

export default function TopBar(){
    return(
        <div className="topBarBody">
            <div>
                <p className="logo">Cookie</p>
            </div>
            <div>
                <a href="#Favoruite">Home</a>
                <a href="">Favourite</a>
            </div>
        </div>
    )
}