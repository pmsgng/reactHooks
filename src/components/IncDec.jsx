import { useEffect } from "react";
import React from 'react';

const IncDec = ({handleDecrement, handleIncrement, count}) => {
    useEffect(() => {
        console.log('Mounted')
        return () => {
            console.log('Unmount')
        }
    }, [])



    return (
        <>
            <div className= 'counter'>
                <button onClick={handleDecrement}>decrement</button>
                <div>{count}</div>
                <button onClick={handleIncrement}>increment</button>
            </div>
        </>
    );
};

export default IncDec;