'use client'

import Layout from '@/components/Layout';
import OrderList from '../components/OrderList';
import axios from '@/services';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <Layout>
      <h1>Purchase Orders</h1>
      <OrderList orders={orders} />
    </Layout>
  );
};

export default HomePage;
