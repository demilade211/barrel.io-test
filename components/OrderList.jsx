import React from 'react'
import Link from 'next/link';

const OrderList = ({ orders }) => {
    return (
        <ul>
            {orders.map(order => (
                <li key={order.id}>
                    <Link href={`/orders/${order.id}`}>
                        {order.itemName} (x{order.quantity})
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default OrderList