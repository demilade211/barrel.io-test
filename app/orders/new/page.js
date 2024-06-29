'use client'

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'
import Layout from '@/components/Layout';
import OrderForm from '@/components/OrderForm';
import axios from '@/services';
import styled from 'styled-components';

const NewOrderPage = () => {
  const router = useRouter();

  const handleSubmit = async (order) => {
    await axios.post('/api/orders', order);
    router.push('/');
  };

  const [show, setShow] = useState(true);

  return (
    <Layout show={show} setShow={setShow}>
      <Con>
        <h1>Create New Order</h1>
        <OrderForm onSubmit={handleSubmit} />
      </Con>
    </Layout>
  );
};

const Con = styled.div`  
  width: 100%;   
  padding: 30px 10px;  
  h1{
    font-size: 25px;
    font-weight: 600;
    text-align:center;
    margin-bottom: 30px;

  }
`;

export default NewOrderPage;
