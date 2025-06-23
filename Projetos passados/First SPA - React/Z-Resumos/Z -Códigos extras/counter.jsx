import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <Button onClick={decrement}>Decrement</Button>
                <Button onClick={increment}>increment</Button>
                <Button onClick={reset}>Reset</Button>
           </div>)
}

export default Counter