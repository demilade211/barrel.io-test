'use client'

import Layout from '@/components/Layout';
import OrderDetail from '@/components/OrderDetails';
import axios from '@/services';
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const OrderDetailPage = () => {
  const params = useParams()
  const { id } = params;
  const [order, setOrder] = useState([]);
  const [show, setShow] = useState(false);

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
    <Layout show={show} setShow={setShow}>
      <Con>
        <div className='inner'>
          <h1>Order #{order.id}</h1>
          <OrderDetail order={order} />
        </div>
      </Con>
    </Layout>
  );
};

const Con = styled.div`  
  width: 100%;   
  padding: 30px 10px;  
  display: flex;
  justify-content: center;
  h1{
    font-size: 25px;
    font-weight: 600;
    text-align:center;
    margin-bottom: 30px;

  }
  .inner{
    width: 500px;
  }
`;

export default OrderDetailPage;
