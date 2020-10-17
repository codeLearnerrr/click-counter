import React, { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1 className="welcomeHeader">Welcome to the Click Counter App:</h1>
            <h2 className="clicksDisplay">The current clicks are <br/> {count} </h2>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)} id="buttonIncrease" type="button">+</button>
                <button onClick={() => setCount(count - 1)} id="buttonDecrease" type="button">-</button>
            </div>
        </div>
    )
}

export default ClickCounter;