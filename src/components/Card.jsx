import "../styles/card.css";
import Tilt from 'react-parallax-tilt';

function Card({ title, imgSrc, tiltAngleY, onClick }) {
    return (
        <Tilt
            tiltReverse={true}
            scale={1.3} 
            glareEnable={true}
            glareMaxOpacity={1}
            transitionSpeed={2500}
            tiltMaxAngleY={50}
            tiltAngleYInitial={tiltAngleY}
        >
            <div className="card-container" onClick={onClick}>
                <img className="card-image" src={imgSrc} alt={title}></img>
                <p className="card-title">{title}</p>
            </div>
        </Tilt>
    );
}

export default Card;
