import React from "react"
import styled from 'styled-components';

const Title = styled.h1`
    position: absolute;
    z-index: -2;

`;

const Header = () => {

    return (
        <div>
            <header>
                <Title>
                    KidsFly
                </Title>
            </header>
        </div>
    )
};

export default Header;