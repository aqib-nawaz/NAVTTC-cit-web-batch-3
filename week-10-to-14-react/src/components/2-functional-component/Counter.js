import React, {useState, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // setCount(count + 1)
        console.log("counted")
    },[count])
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter