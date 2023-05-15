import {useEffect, useState} from "react";
import logo from './logo.svg';

function Counter() {
    // This only calls `useState()` with the default value of 0 the first time the component is created (otherwise 0 would override your new value set with `setCount` every time)
    var [count, setCount] = useState(0);
    // By calling `setCount((previousCount) => previousCount - 1)` below instead of `setCount(count -1)`, we are avoiding a potential bug caused by the asynchronous batching that React executes behind the scenes. `setCount` passes whatever its previous value is into the method (you could call "previousCount" anything you wanted) instead of relying on the value of `count` having been updated before a second call. This doesn't matter here/wouldn't be a bug here due to only one attempt to change state, but it's worth noting. The more appropriate context/need for this solution would be in a context where you update something twice in a row, like so:
    // function handleClickEvent() {
    //     setCount(count + 1);
    //     setCount(count + 1);
    // }
    // After that, the value of `count` would be `1`. This is obviously unexpected. Ergo a solution.
    // Updating the state in this way with the previousCount is called a functional state update.
    
    // useEffect(() => {
    //     if (count < 0) {
    //         alert("You shouldn't go below zero, you know...");
    //     }
    //     return () => {
    //         // something or if count ever drops it could become a loop
    //     }
    // }, [count]);

    return (
        <>
            <div>
                <h3>Event Handling</h3>
                <p>You've clicked {count} times</p>
                <button 
                    onClick={() => setCount((previousCount) => previousCount - 1)}>
                    -
                </button>
                <img src={logo} className="app-logo" alt="logo" />
                <button onClick={() => setCount((count)=>count+1)}>+</button>
            </div>
        </>
    );
}

export default Counter;