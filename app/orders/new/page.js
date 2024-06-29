// app/orders/new/page.js
import { useRouter } from 'next/router';
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
      <h1>Create New Order</h1>
      <OrderForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default NewOrderPage;
