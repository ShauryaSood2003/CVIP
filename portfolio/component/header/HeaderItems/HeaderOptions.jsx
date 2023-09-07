

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box,Typography } from '@mui/material';

const Container=styled(Box)`
     display:flex;
     flex-wrap:wrap;

`

const Item = styled(Typography)`
    padding: 2px 20px;
    margin: 4px 10px;
    color: #fa1459;
    font-weight:600;
    border-bottom: 2px solid transparent;
    
   
    &.active {
        border-bottom: 2px solid #f75787;
    }

    &:hover {
        border-bottom: 2px solid #f75787;
        
    }
`;

const HeaderOptions = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    const items = ["Home", "Skills", "Projects","Education","Contact"];

    return (
        <Container>
            {items.map((item, index) => (
            
                <Item
                    key={index}
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => handleItemClick(index)}
                >
                    {item}
                </Item>
                
            ))}
        </Container>
    );
};


export default HeaderOptions;