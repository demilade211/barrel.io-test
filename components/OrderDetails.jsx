import React from 'react'

const OrderDetails = ({ order }) => {
    return (
        <div>
            <h1>Order {order.id}</h1>
            <p>Item Name: {order.itemName}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Status: {order.status}</p>
        </div>
    )
}

export default OrderDetails