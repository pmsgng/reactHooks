import React, { useState, useEffect } from 'react';
import './counter.css'
import IncDec from './IncDec';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        console.log('Updeted!')
    },[count])

    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleShowHide = () => {
        if (isVisible) {
            setIsVisible(!isVisible)
        } else {
            setIsVisible(!isVisible)
        }
    }

    return (
        <>
            {isVisible &&
            <IncDec 
                    handleDecrement={handleDecrement} 
                    handleIncrement={handleIncrement} 
                    count={count}
            />}
            <button onClick={handleShowHide}>Show / Hide</button>
        </>
    );
};

export default Counter;