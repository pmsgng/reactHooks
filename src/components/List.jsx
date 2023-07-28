import React from 'react';

const List = ({ posts }) => {
    return (
        <>
            {posts.map(item => {
                if (item.id < 5) {
                    return <p key={item.id}>{item.body}</p>
                }
            })}
        </>
    );
};

export default List;