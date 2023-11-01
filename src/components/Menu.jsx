import "../styles/menu.css";

function Menu({ onItemClick }) {
    return (
        <div className="menu-container">
            <button className="menu-item" onClick={onItemClick}>Easy</button>
            <button className="menu-item" onClick={onItemClick}>Normal</button>
            <button className="menu-item" onClick={onItemClick}>Hard</button>
        </div>
    );
}

export default Menu;