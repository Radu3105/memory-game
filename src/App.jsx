import "./App.css";
import backgroundImg from './assets/images/background.jpg';
import superheroes from "./superheroes";
import { useEffect } from "react";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import CardList from "./components/CardList";

function App() {
    const MAX_SCORE  = {'EASY': 5, 'NORMAL': 7, 'HARD': 10};
    const MAX_CARDS  = {'EASY': 3, 'NORMAL': 4, 'HARD': 5};
    // const MAX_UNIQUE = {'EASY': 2, 'NORMAL': 4, 'HARD': 6};
    const DIFFICULTY = 'EASY';

    const cards = superheroes;

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [cardsToDisplay, setCardsToDisplay] = useState([]);

    useEffect(() => {
        shuffleCards(true);
    }, []);

    useEffect(() => {
        if (currentScore === MAX_SCORE[DIFFICULTY]) {
            winGame();
        }
    }, [currentScore]);

    useEffect(() => {
        if (selectedCards.length > 0) {
            shuffleCards();
        }
    }, [selectedCards])

    const handleCardClick = (card) => {
        if (selectedCards.find((c) => c.title === card.title)) {
            loseGame();
            return;
        }
        setSelectedCards((prev) => [...prev, card]);
        setCurrentScore((prevScore) => prevScore + 1);
        if (currentScore >= highScore) {
            setHighScore((prevHighScore) => prevHighScore + 1);
        }
    }

    const shuffleCards = (isInitialShuffle = false) => {
        setCardsToDisplay([]);
        const randomCards = [];
        while (randomCards.length < MAX_CARDS[DIFFICULTY]) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const randomCard = cards[randomIndex];
            if (!randomCards.find((card) => card.title === randomCard.title) && !randomCards.find((card) => card.title === selectedCards.title)) {
                randomCards.push(randomCard);
            }
        }
        if (!isInitialShuffle) {
            console.log('after click');
        }
        setCardsToDisplay(randomCards);
    }

    const loseGame = () => {
        alert("You lost!");
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
        <div style={{backgroundImage: `url(${backgroundImg})`}} className="app">
            <div className="content">
                <Scoreboard currentScore={currentScore} highScore={highScore}/>
                <CardList cards={cardsToDisplay} onCardClick={handleCardClick} />
                <div>
                    <p className="round">Round: {currentScore} / {MAX_SCORE[DIFFICULTY]}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
