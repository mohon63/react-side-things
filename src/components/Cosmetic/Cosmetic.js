import React from 'react';

const cosmetic = (props) => {
    console.log(props.cosmetic);
    const { name, gender, price } = props.cosmetic;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default cosmetic;