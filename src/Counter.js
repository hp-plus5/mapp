import {useState} from "react";
import logo from './logo.svg';

function Counter() {
    // This only calls `useState()` with the default value of 0 the first time the component is created (otherwise 0 would override your new value set with `setCount` every time)
    var [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h3>Event Handling</h3>
                <p>You've clicked {count} times</p>
                <button onClick={() => setCount(count-1)}>-</button>
                <img src={logo} className="app-logo" alt="logo" />
                <button onClick={() => setCount(count+1)}>+</button>
            </div>
        </>
    );
}

export default Counter;