import "../styles/cardList.css";
import Card from "./Card";

function CardList({ cards, onCardClick }) {
    let counter = Math.floor(-cards.length / 2);
    
    return (
        <div className="card-list-container">
            {cards.map((card) => {
                counter++;
                return (
                <Card
                    key={card.title}
                    title={card.title}
                    imgSrc={card.imgSrc}
                    // tiltAngleY={-counter * 15}
                    tiltAngleY={0}
                    onClick={() => onCardClick(card)}
                />
                )
            })}
        </div>
    );
}

export default CardList;
