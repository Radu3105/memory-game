import "./App.css";
import CardList from "./components/CardList";
import { useState } from "react";

function App() {
    const cards = [
        {
            title: "Card #1",
            imgSrc: '',
        },
        {
            title: "Card #2",
            imgSrc: '',
        },
        {
            title: "Card #3",
            imgSrc: '',
        },
    ];

    const [selectedCards, setSelectedCards] = useState([]);

    function handleCardClick(card) {
        setSelectedCards((prev) => [...prev, card.title]);
    }

    return (
        <>
            <CardList cards={cards} onCardClick={handleCardClick} />
        </>
    );
}

export default App;
