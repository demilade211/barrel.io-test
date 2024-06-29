'use client'

import Layout from '@/components/Layout';
import styled from 'styled-components';

const OrderDetails = ({ order }) => {
    return (
        <Con>
            <h1>Order {order.id}</h1>
            <p>Item Name: {order.itemName}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Status: {order.status}</p>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%;  
    background: rgba(246, 246, 249, 0.30);
    /* @media (max-width: 900px) {  
        grid-template-columns:100%;
    } */
`;

export default OrderDetails