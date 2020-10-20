import React, { useState } from 'react';
import '.././displayComponent/DisplayTitlesCountsAndButtons.css';
import '../assets/buttonIcons/style.css';
import clickAddSound from '../assets/sounds/clickAddSound.wav';
import clickSubtractSound from '../assets/sounds/clickSubtractSound.wav';


const playAddClick = () => {
    document.getElementById('add').play();
};
const playSubtractClick = () => {
    document.getElementById('subtract').play();
};

function DisplayTitlesCountsAndButtons() {

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1 className="headerTitle">Welcome to the Click Counter App:</h1>
            <h2 className="countsTitle">The current clicks are <br /> {count} </h2>
            <div className="buttons">
                <button onClick={() => { setCount(count + 1); playAddClick(); }} type="button" className="icon-addIcon-min buttonStyle"></button>
                <button onClick={() => { setCount(count - 1); playSubtractClick(); }} type="button" className="icon-subtractIcon-min buttonStyle" ></button>
            </div>
            <audio id="add" src={clickAddSound}></audio>
            <audio id="subtract" src={clickSubtractSound}></audio>
        </div>
    )
}

export default DisplayTitlesCountsAndButtons;