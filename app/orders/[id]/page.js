'use client'

import Layout from '@/components/Layout';
import OrderDetail from '@/components/OrderDetails';
import axios from '@/services';
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const OrderDetailPage = () => {
  const params = useParams()
  const { id } = params;
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      }
    };
    if (id) {
      fetchOrder();
    } 
  }, []);

  return (
    <Layout>
      <OrderDetail order={order} />
    </Layout>
  );
};

export default OrderDetailPage;
