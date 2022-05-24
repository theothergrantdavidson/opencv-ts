import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Host = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 12px;
`;

const List = styled.ul`
    width: 200px;
    height: fit-content;
`;

const LinkContainer = styled.li`
    :hover {
        color: #3178c6;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-left: 4px;
    padding-right: 4px;
    height: 30px;
    font-family: 'Catamaran', sans-serif;
    font-weight: 600;
    font-size: large;
    color: #616161;
    :hover {
        color: #3178c6;
    }
`;

export const IntroductionToUsingOpencv = () => {
    return (
        <Host>
            <List>
                <LinkContainer>
                    <StyledLink to={'/using-opencv-ts'}>
                        Using opencv-ts
                    </StyledLink>
                </LinkContainer>
            </List>
        </Host>
    );
};
