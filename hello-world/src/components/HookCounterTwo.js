import React, { useState } from 'react';

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    //useState with Previous state
    const IncrementFive = () => {
        for (let i = 1; i <= 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}> Reset </button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}> Decrement </button>
            <button onClick={IncrementFive}> IncrementFive </button>
        </div>
    );
};

export default HookCounterTwo;
