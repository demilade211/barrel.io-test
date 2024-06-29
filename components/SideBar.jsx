'use client'

import React from 'react'
import styled from 'styled-components'; 
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation'

const SideBar = () => {

    const router = useRouter();

    return (
        <Con>
            <div className='top'>
                <Avatar style={{marginBottom:"35px"}} onClick={() => router.push(`/`)} icon={<UserOutlined />} />
                <div className='img active' onClick={() => router.push(`/`)}><img src="/images/sidebar/home.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/users.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/cal.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/share.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/file.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/note.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/heart.svg" alt="img" /></div>
                <div className='img'><img src="/images/sidebar/right.svg" alt="img" /></div>
            </div>
            <div className='bottom'>
                <div className='img'>
                    <img src="/images/sidebar/setting.svg"  alt="img" />
                </div>
                <Avatar style={{ backgroundColor: '#D7E5FD', color: '#B1CDFD',fontFamily:"Poppins",fontSize:"10px" }}>U</Avatar>
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 80px;
    height: 100vh;
    background: #FFF;
    box-shadow: 0px 4px 23px 0px rgba(0, 0, 0, 0.05);
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content:space-between;
    position: fixed;
    .top{ 
        display: flex;
        flex-direction: column;
        align-items: center; 
        .img{
            margin-bottom:20px;
            cursor: pointer;
        }
        .active{
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: center;
            border-radius: 8px;
            background: #E9EFFF;
        }
    }
    .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            margin-bottom:20px;
            cursor: pointer;
        }
    }
`;

export default SideBar