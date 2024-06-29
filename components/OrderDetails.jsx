'use client'

import Layout from '@/components/Layout';
import styled from 'styled-components';

const OrderDetails = ({ order }) => {
    return (
        <Con>
            <div className='flex justify-between items-center'>
                <p className='title'>Item Name:</p>
                <p className='value'>{order.itemName}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='title'>Quantity:</p>
                <p className='value'>{order.quantity}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='title'>Status: </p>
                <p className='value'>{order.status}</p>
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%;  
    background: rgba(246, 246, 249, 0.30);
    .title{
        font-size: 15px;
        font-weight:600;
    }
    .value{
        font-size: 15px;
        font-weight:400;
    }
`;

export default OrderDetails