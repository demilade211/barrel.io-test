// app/api/orders/[id].js
import { NextResponse } from 'next/server';

let orders = [
  { id: 1, itemName: 'Item 1', quantity: 2,status:"delivered" },
  { id: 2, itemName: 'Item 2', quantity: 1,status:"delivered" },
];

function getOrderById(id) {
  return orders.find(order => order.id === id);
}

export async function GET(request,{params}) { 
  const id = params.id;

  try {
    const order = getOrderById(Number(id));
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 });
  }
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    const data = await request.json();
    const orderIndex = orders.findIndex(order => order.id === Number(id));
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    orders[orderIndex] = { id: Number(id), ...data };
    return NextResponse.json(orders[orderIndex], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    const orderIndex = orders.findIndex(order => order.id === Number(id));
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    const [deletedOrder] = orders.splice(orderIndex, 1);
    return NextResponse.json(deletedOrder, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
  }
}
