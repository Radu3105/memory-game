import "../styles/card.css";

function Card({ title, imgSrc, onClick }) {
    return (
        <div className="card-container" onClick={onClick}>
            <img src={imgSrc} alt={title}></img>
            <h1 className="card-title">{title}</h1>
        </div>
    );
}

export default Card;
