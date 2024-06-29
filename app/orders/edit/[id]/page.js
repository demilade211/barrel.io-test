'use client'

import { useRouter, useParams } from 'next/navigation' 
import Layout from '@/components/Layout';
import OrderForm from '@/components/OrderForm';
import axios from '@/services';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const EditOrderPage = () => {
  const params = useParams()
  const router = useRouter();
  const { id } = params;
  const [order, setOrder] = useState({});
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

  console.log(order);

  const handleSubmit = async (updatedOrder) => {
    try {
      await axios.put(`/api/orders/${order.id}`, updatedOrder);
      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout show={show} setShow={setShow}>
      <Con>
        <div className='inner'>
          <h1>Edit Order {order.id}</h1>
          <OrderForm order={order} onSubmit={handleSubmit} />
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

export default EditOrderPage;
