import "../styles/card.css";

function Card({ title, imgSrc, onClick }) {
    return (
        <div className="card-container" onClick={onClick}>
            <img src={imgSrc} alt={title}></img>
            <p className="card-title">{title}</p>
        </div>
    );
}

export default Card;
