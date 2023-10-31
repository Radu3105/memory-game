import '../styles/scoreboard.css';

function Scoreboard({ currentScore, highScore, currentRound, rounds }) {
    return (
        <div className="scoreboard-container">
            <p>Current Score: {currentScore}</p>
            <p>High Score: {highScore}</p>
            <p>Round: {currentRound} / {rounds}</p>
        </div>
    );
}

export default Scoreboard;