import '../styles/scoreboard.css';

function Scoreboard({ currentScore, highScore }) {
    return (
        <div className="scoreboard-container">
            <p>Current Score: {currentScore}</p>
            <p>High Score: {highScore}</p>
        </div>
    );
}

export default Scoreboard;