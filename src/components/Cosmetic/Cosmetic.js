import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/Fackdb';

const cosmetic = (props) => {
    // console.log(props.cosmetic);
    const { name, gender, price, _id } = props.cosmetic;
    const handlePurchase = id => {
        console.log(id);
        addToDb(id);
    }
    const handleRemove = id => {
        deleteFromDb(id);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>ID: {_id} Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default cosmetic;