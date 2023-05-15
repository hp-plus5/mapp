import {useEffect, useState} from "react";

export default function GhostMessage() {
    var [text, setText] = useState('');

    // useEffect is apparently no longer cool, but here's this anyway.
    useEffect(() => {
        setText("Welcome");
        let timerId = setTimeout(() => {
            setText("Still there?");
        }, 5000);
        let timerId2 = setTimeout(() => {
            setText("I've changed twice now...");
        }, 10000);
        let timerId3 = setTimeout(() => {
            setText("I thought you loved me?");
        }, 15000);
        let timerId4 = setTimeout(() => {
            setText(">:( Refresh the page! You missed it!");
        }, 25000);
        return () => { 
            clearTimeout(timerId);
            clearTimeout(timerId2);
            clearTimeout(timerId3);
            clearTimeout(timerId4);
        }
    }, []); // passing in this empty array tells `useEffect` that there are no changes that should instigate a rerun of the first function passed in. We might otherwise add `[text]` instead of `[]` and then anytime the value of `text` changed, `useEffect` would be called all over again, including its `return` body.

    return(<>
        <p className="code">
            <span className="method_name">
                useEffect(
            </span>
            <span className="arguments">
                onLoadFunction, reloadWorthyDependencies
            </span>
            <span className="method_name">
                )
            </span>
        </p>
        <h2>This value will increment as time goes by.</h2>
        <p>{text}</p>
        <p className="finePrint">This widget tests React's `useEffect` hook and requires knowing to clean up the effects instigated. If you were to run this in React's `StrictMode` and in a development environment and didn't clean this up correctly, this text would change at twice the pace desired. </p>
    </>);
}