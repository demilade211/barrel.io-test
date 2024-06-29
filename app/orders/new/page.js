'use client'

import { useRouter, usePathname } from 'next/navigation'
import Layout from '@/components/Layout';
import OrderForm from '@/components/OrderForm';
import axios from '@/services';

const NewOrderPage = () => {
  const router = useRouter();

  const handleSubmit = async (order) => {
    await axios.post('/api/orders', order);
    router.push('/');
  };

  return (
    <Layout>
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
    font-size: 15px;
    font-weight: 600;
  }
`;

export default NewOrderPage;
