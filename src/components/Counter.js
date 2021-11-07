import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);

    const decrement = () => {
        if (count === 0) return;

        setCount(count - 1);
    }

    const reset = () => setCount(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <h3>Count: {count}</h3>

            <button onClick={decrement}>Decrement -</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;
