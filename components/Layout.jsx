import React from 'react'
import styled from 'styled-components';
import SideBar from './SideBar';

const Layout = ({children}) => {
    return (
        <Container>
            <SideBar />
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
    } 
`;

export default Layout