import "./App.css";
import testImg from "./assets/test.png";
import { useEffect } from "react";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import CardList from "./components/CardList";

function App() {
    const cards = [
        {
            title: "Card #1",
            imgSrc: testImg,
        },
        {
            title: "Card #2",
            imgSrc: testImg,
        },
        {
            title: "Card #3",
            imgSrc: testImg,
        },
        {
            title: "Card #4",
            imgSrc: testImg,
        },
        {
            title: "Card #5",
            imgSrc: testImg,
        },
    ];

    const [selectedCards, setSelectedCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
        if (currentScore === cards.length) {
            winGame();
        }
    }, [currentScore]);

    const handleCardClick = (card) => {
        if (selectedCards.find((c) => c === card.title)) {
            loseGame();
            return;
        }
        setSelectedCards((prev) => [...prev, card.title]);
        setCurrentScore((prevScore) => prevScore + 1);
    }

    const loseGame = () => {
        alert("You lost!");
        setSelectedCards([]);
        resetGame();
    }

    const winGame = () => {
        alert("You won!");
        resetGame();
    }

    const resetGame = () => {
        setSelectedCards([]);
        setCurrentScore(0);
    }

    return (
        <>
            <Scoreboard currentScore={currentScore} highScore="N/A" />
            <CardList cards={cards} onCardClick={handleCardClick} />
        </>
    );
}

export default App;
