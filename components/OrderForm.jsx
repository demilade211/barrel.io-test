import React from 'react'
import { useState,useEffect } from 'react';
import AuthInput from './form/AuthInput';
import AuthButton from './form/AuthButton';

const OrderForm = ({ order={}, onSubmit }) => {

    console.log(order, ">>");
    const [itemName, setItemName] = useState(order.itemName || '');
    const [quantity, setQuantity] = useState(order.quantity || "");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...order, itemName, quantity });
    };

    useEffect(() => {
        if (order) {
            setItemName(order.itemName)
            setQuantity(order.quantity)
        }
    }, [order.itemName]);

    console.log(order);

    return (
        <form onSubmit={handleSubmit}>
            <AuthInput label="Product name" type="text" classs="first-item" onChange={(e) => setItemName(e.target.value)} name="name" value={itemName} />
            <AuthInput label="Quantity" type="number" onChange={(e) => setQuantity(Number(e.target.value))} name="quantity" value={quantity} />
            <AuthButton content={`Create Product`} />
        </form>
    )
}

export default OrderForm