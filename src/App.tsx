import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

export function IncreaseButton({
    counter,
    setCounter
}: {
    counter: number;
    setCounter: (counter: number) => void;
}): JSX.Element {
    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <Button onClick={increaseCounter}>Increase Counter</Button>
        </div>
    );
}

export function DecreaseButton({
    counter,
    setCounter
}: {
    counter: number;
    setCounter: (counter: number) => void;
}): JSX.Element {
    function decreaseCounter() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <Button onClick={decreaseCounter}>Decrease Counter</Button>
        </div>
    );
}

function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h6>Welcome to the scorer web page!</h6>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            {counter}
            <IncreaseButton counter={counter} setCounter={setCounter} />
            <DecreaseButton counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default App;
