import React from 'react'
import styled from 'styled-components';
import { Col, Divider, Row, Avatar } from 'antd';
import { Checkbox } from 'antd';
import Link from 'next/link';
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from '@/services';
import { useRouter, useParams } from 'next/navigation'

const OrderList = ({ val, setOrders }) => {

    const router = useRouter();
    
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const handleDelete = async ( ) => {
        try {
            await axios.delete(`/api/orders/${val.id}`);
            setOrders(prev => (prev.filter(ord => ord.id !== val.id)))
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PersonCard>
            <div className='left'>
                <Checkbox style={{ marginRight: "25px" }} name='education' onChange={onChange}></Checkbox>
                <Avatar size={44} style={{ backgroundColor: '#D7E5FD', color: '#B1CDFD', fontFamily: "Poppins", fontWeight: "500", fontSize: "20px" }}>O</Avatar>
                <div className='details'>
                    <Link href={`/orders/${val.id}`}>
                        <h3>{val.itemName}</h3>
                    </Link>
                    <p className='edu'>Quantity: {val.quantity}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <FaRegEdit className='mr-2 cursor-pointer' onClick={() => router.push(`/orders/edit/${val.id}`)}/>
                <MdOutlineDelete className='cursor-pointer' onClick={handleDelete} />
            </div>
        </PersonCard>
    )
}

const PersonCard = styled.div`  
    width: 100%;  
    min-height:143px;
    border-radius: 16px;
    background: #FFF;
    border-top: 1px solid #EEE; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        align-items:center;
        .details{
            height: 100%;
            margin-left:20px;
            h3{
                color: #000;
                font-family: Poppins;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                margin-bottom:2px;
            }
            .loc{
                color: #000;
                font-family: Poppins;
                font-size: 10px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin-bottom:8px;
            }
            .edu{
                color: #000;
                font-family: Poppins;
                font-size: 10px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
            .hash{
                color: #1D4ED8;
                font-family: Poppins;
                font-size: 8px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-right: 10px;
            }
            .exp{
                border-radius: 16px;
                background: #F3FAFC;
                display: flex;
                padding: 2px 10px;
                justify-content: center;
                align-items: center;
                color: #037092;
                font-family: Poppins;
                font-size: 8px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }
    
`;

const MyRow = styled(Row)`  
    margin-bottom:10px;
`;


export default OrderList