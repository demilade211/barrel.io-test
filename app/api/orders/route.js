 

let orders = [
    { id: 1, itemName: 'Item 1', quantity: 2, status: "delivered" },
    { id: 2, itemName: 'Item 2', quantity: 1, status: "delivered" },
];

function getOrders() {
    return orders;
}
 

function createOrder(data) {
    const newOrder = { id: orders.length + 1, ...data };
    orders.push(newOrder);
    return newOrder;
}

function updateOrder(id, data) {
    const orderIndex = orders.findIndex(order => order.id === id);
    if (orderIndex === -1) {
        throw new Error('Order not found');
    }
    orders[orderIndex] = { id, ...data };
    return orders[orderIndex];
}

function deleteOrder(id) {
    const orderIndex = orders.findIndex(order => order.id === id);
    if (orderIndex === -1) {
        throw new Error('Order not found');
    }
    const [deletedOrder] = orders.splice(orderIndex, 1);
    return deletedOrder;
}

export async function GET(request) { 
    try {

        const allOrders = getOrders();
        return Response.json(allOrders, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const newOrder = createOrder(data);
        return Response.json(newOrder, { status: 201 });
    } catch (error) {
        return Response.json({ error: 'Failed to create order' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, ...data } = await request.json();
        const updatedOrder = updateOrder(Number(id), data);
        return Response.json(updatedOrder, { status: 200 });
    } catch (error) {
        return Response.json({ error: error.message || 'Failed to update order' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const deletedOrder = deleteOrder(Number(id));
        return Response.json(deletedOrder, { status: 200 });
    } catch (error) {
        return Response.json({ error: error.message || 'Failed to delete order' }, { status: 500 });
    }
}
