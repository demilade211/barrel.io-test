import React from 'react'
import { useState } from 'react';

const OrderForm = ({ order = {}, onSubmit }) => {

    const [itemName, setItemName] = useState(order.itemName || '');
    const [quantity, setQuantity] = useState(order.quantity || 1);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...order, itemName, quantity });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default OrderForm