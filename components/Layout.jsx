import React from 'react'
import styled from 'styled-components';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
import Head from '@/components/subcomponents/Head';

const Layout = ({ children, show, setShow }) => {


    return (
        <Container>
            {show && <SideBar show={show} setShow={setShow} />}
            <Head show={show} setShow={setShow} />
            <div className='right-con'>

                {children}
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    .right-con{    
        margin-left:80px;  
        @media (max-width: 900px) {  
            margin-left:0px;
        } 
    } 
`;

export default Layout