import "../styles/cardList.css";
import Card from "./Card";

function CardList({ cards, onCardClick }) {
    return (
        <div className="card-list-container">
            {cards.map((card) => (
                <Card key={card.title} title={card.title} imgSrc={card.imgSrc} onClick={() => onCardClick(card)}/>
            ))}
        </div>
        
    );
}

export default CardList;
