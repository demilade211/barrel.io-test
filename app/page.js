'use client'

import Layout from '@/components/Layout'; 
import styled from 'styled-components';
import axios from '@/services';
import { useEffect, useState } from 'react';
import { Col, Divider, Row, Avatar } from 'antd';
import { Checkbox } from 'antd';
import OrderList from '@/components/OrderList';
import Head from '@/components/subcomponents/Head';



const HomePage = () => {

  const jobQualification = [
    {
      name: "John Doe",
      location: "San Francisco",
      education: "Bachelor's Degree in Computer Science",
      hashtags: ["programming", "software", "engineering"],
      experiences: ["React", "Node.js", "JavaScript"],
    },
    {
      name: "Jane Smith",
      location: "New York",
      education: "Master's Degree in Data Science",
      hashtags: ["data", "analytics"],
      experiences: ["Python", "SQL", "Data Visualization"],
    },
  ]
  const [orders, setOrders] = useState([]);
  const [showDrop, setShowDrop] = useState(false);
  const [jobQualifications, setJobQualifications] = useState(jobQualification);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState([]);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(() => {
    setLoading(true)
    const fetchOrders = async () => {
      try { 
        const response = await axios.get('/api/orders');
        setLoading(false)
        setOrders(response.data);
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  console.log(orders);
  return (
    <>
      {loading ?
        <div className='flex justify-center item-center'><p>loading</p></div>
        :
        <Layout show={show} setShow={setShow}>
          <Con>
            
            <MainRightCon>
              <div className='header'>
                <Row justify="space-between" align="middle">
                  <Col><Checkbox name='education' onChange={onChange}><p className='can-count'>{orders.length} Orders</p></Checkbox></Col>
                </Row>
              </div>
              {orders.map((val, index) => (
                <OrderList key={index} val={val} setOrders={setOrders}/>
              ))}

            </MainRightCon>
          </Con>
        </Layout>}
    </>

  );
};

const Con = styled.div`  
    width: 100%;  
    background: rgba(246, 246, 249, 0.30); 
    padding: 30px 10px; 
    /* @media (max-width: 900px) {  
        grid-template-columns:100%;
    } */
`;




const MainRightCon = styled.div`  
    width: 100%;  
    height:100vh;
    padding: 8px 16px 0px 16px;
    border-radius: 16px;
    background: #FFF; 
    .header{
        padding:20px 0;
        .can-count{
            color: #1D4ED8;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px; /* 157.143% */
            margin-left:20px;
        }
        .qualified{
            color: #1D4ED8;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 157.143% */
        }
        .task{
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            display: flex;
        }
        .disqualified{
            display: flex;
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
        }
        .tag{
            border-radius: 40px;
            background: #F7F8FD;
            display: flex;
            justify-content:center;
            align-items:center;
            padding: 1px 6px;
            color: #22215B;
            text-align: center;
            font-family: Poppins;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 220% */
            margin-left:10px;
        }
    }
`;

export default HomePage;
