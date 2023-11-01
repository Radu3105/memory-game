import "./App.css";
import backgroundImg from "./assets/images/background.jpg";
import superheroes from "./superheroes";
import { useEffect } from "react";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import CardList from "./components/CardList";
import Menu from "./components/Menu";

function App() {
    const MAX_SCORE = { EASY: 5, NORMAL: 7, HARD: 10 };
    const MAX_CARDS = { EASY: 3, NORMAL: 4, HARD: 5 };
    const MAX_UNIQUE = { EASY: 2, NORMAL: 3, HARD: 3 };

    const cards = superheroes;

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [cardsToDisplay, setCardsToDisplay] = useState([]);
    const [isInMenu, setIsInMenu] = useState(true);
    const [difficulty, setDifficulty] = useState(null);

    useEffect(() => {
        shuffleCards(true);
    }, [difficulty]);

    useEffect(() => {
        if (currentScore === MAX_SCORE[difficulty]) {
            winGame();
        }
    }, [currentScore]);

    useEffect(() => {
        if (selectedCards.length > 0) {
            shuffleCards();
        }
    }, [selectedCards]);

    useEffect(() => {
        resetGame();
    }, [isInMenu]);

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
    };

    const shuffleCards = (isInitialShuffle = false) => {
        setCardsToDisplay([]);
        const randomCards = [];
        while (randomCards.length < MAX_CARDS[difficulty]) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const randomCard = cards[randomIndex];
            if (
                !randomCards.find((card) => card.title === randomCard.title) &&
                !randomCards.find((card) => card.title === selectedCards.title)
            ) {
                randomCards.push(randomCard);
            }
        }
        if (!isInitialShuffle) {
            console.log("after click");
        }
        setCardsToDisplay(randomCards);
    };

    const loseGame = () => {
        alert("You lost!");
        resetGame();
    };

    const winGame = () => {
        alert("You won!");
        resetGame();
    };

    const resetGame = () => {
        setSelectedCards([]);
        setCurrentScore(0);
    };

    const handleOnMenuItemClick = (menuItem) => {
        setDifficulty(menuItem.target.innerHTML.toUpperCase());
        setIsInMenu(false);
    };

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImg})` }}
            className="app"
        >
            <div className="content">
                <button onClick={() => setIsInMenu(true)}>Home</button>
                {isInMenu ? (
                    <div className="intro">
                        <div className="spacer-100px"></div>
                        <h1>
                            Superheroes & Villains<br></br>Memory Game
                        </h1>
                        <p>
                            Click on a card to proceed to the next round, but
                            make sure not to click on it again for the remaining
                            rounds, otherwise you will lose. <br></br> 
                            Complete all rounds to win the game.
                        </p>
                        <div className="spacer-100px"></div>
                        <h2>Choose a difficulty</h2>
                        <Menu onItemClick={handleOnMenuItemClick} />
                    </div>
                ) : (
                    <div>
                        <Scoreboard
                            currentScore={currentScore}
                            highScore={highScore}
                        />
                        <CardList
                            cards={cardsToDisplay}
                            onCardClick={handleCardClick}
                        />
                        <div>
                            <p className="round">
                                Round: {currentScore} / {MAX_SCORE[difficulty]}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
