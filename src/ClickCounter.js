import React, { useState } from 'react';
import './ClickCounter.css';
import './assets/icomoon/style.css'
function ClickCounter() {

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1 className="welcomeHeader">Welcome to the Click Counter App:</h1>
            <h2 className="clicksDisplay">The current clicks are <br/> {count} </h2>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)} id="buttonIncrease" type="button" className="icon-addIcon-min"></button>
                <button onClick={() => setCount(count - 1)} id="buttonDecrease" type="button" className="icon-subtractIcon-min" ></button>
            </div>
        </div>
    )
}

export default ClickCounter;