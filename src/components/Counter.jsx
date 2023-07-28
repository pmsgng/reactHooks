import React, { useState, useEffect } from 'react';
import './counter.css'
import IncDec from './IncDec';
import List from './List';

const Counter = () => {
    const [count, setCount] = useState(5);
    const [isVisible, setIsVisible] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

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
            <List posts={posts} />
        </>
    );
};

export default Counter;