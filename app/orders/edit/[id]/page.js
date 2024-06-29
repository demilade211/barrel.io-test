'use client'

import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import OrderForm from '@/components/OrderForm';
import axios from '@/services';

const EditOrderPage = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`/api/orders/${id}`);
  const order = response.data;

  const router = useRouter();
  const handleSubmit = async (updatedOrder) => {
    await axios.put(`/api/orders/${order.id}`, updatedOrder);
    router.push(`/orders/${order.id}`);
  };

  return (
    <Layout>
      <h1>Edit Order {order.id}</h1>
      <OrderForm order={order} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default EditOrderPage;
