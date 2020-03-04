import React from 'react';
import styled from 'styled-components';

const HomeWrapperDiv = styled.div`
    display: flex;
`;

const Image = styled.img`
    width: 341px;
    height: 812px;
    margin: auto;
    top: 0;
    object-fit: cover;
`;

const Button = styled.button`
    display: inline;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -16px;
    width: 115px;
    height: 150px;
`;


const LandingPage = () => {
    return (
        <HomeWrapperDiv>
            <Image
                className="background-image"
                src='https://images.unsplash.com/photo-1497581170673-3d7d98e9a075?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjcyMDE3fQ&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
                alt=""
            />
            <Button className="enter-button">Enter!</Button>
        </HomeWrapperDiv>
    );
}

export default LandingPage;
