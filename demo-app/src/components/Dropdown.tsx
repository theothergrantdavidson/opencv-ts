import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Caret } from '../icons/caret';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface DropdownProps {
    title: string;
    menuItems: Array<{ route: string; title: string }>;
    expanded?: boolean;
}

const Host = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    justify-content: space-between;

    :hover {
        cursor: pointer;
        background-color: #e0e0e0;
        color: #3178c6;
    }
`;

const CaretWrapper = styled.div<{ color: string }>`
    width: 32px;
    height: 32px;

    svg {
        width: 32px;
        height: 32px;
        transform-origin: center;

        path {
            stroke-width: 1;
            stroke: #616161;
            fill: #616161;

            :hover {
                stroke: #3178c6;
                fill: #3178c6;
            }
        }
    }
`;

const DropdownContentWrapper = styled(motion.div)`
    overflow: hidden;
`;

const DropdownContentContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    background: #ededed;
    width: 100%;
    color: red;
    width: 100%;
`;

const MenuItem = styled(Link)<{ color: string }>`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-left: 24px;
    padding-right: 4px;
    height: 30px;
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: large;
    width: 100%;
    color: ${({ color }) => color};
    :hover {
        color: #3178c6;
    }
`;

const StyledLink = styled(Link)<{ color: string }>`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-left: 12px;
    padding-right: 4px;
    height: 50px;
    font-family: 'Catamaran', sans-serif;
    font-weight: 600;
    font-size: larger;
    width: 100%;
    color: #616161;
    :hover {
        color: #3178c6;
    }
`;

export const Dropdown: React.FC<DropdownProps> = ({ title, menuItems }) => {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const isOpen = useMemo(() => {
        return menuItems.some(({ route }) => route === location.pathname);
    }, [location]);

    return (
        <Host>
            <MenuItemHeader
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered((currentValue) => !currentValue)}
            >
                <StyledLink color={isHovered ? '#3178c6' : '#616161'} to="/">
                    {title}
                </StyledLink>
                <motion.div
                    animate={
                        isHovered || isOpen
                            ? { transform: 'rotate(90deg)' }
                            : { transform: 'rotate(0deg)' }
                    }
                    transition={{ ease: 'easeIn', duration: 0.1 }}
                >
                    <CaretWrapper color={isHovered ? '#3178c6' : '#616161'}>
                        <Caret />
                    </CaretWrapper>
                </motion.div>
            </MenuItemHeader>
            <DropdownContentWrapper
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                    height: isHovered || isOpen ? 'fit-content' : '0px'
                }}
            >
                <DropdownContentContainer>
                    {menuItems.map(({ route, title }) => {
                        return (
                            <MenuItem
                                key={title}
                                to={route}
                                color={
                                    location.pathname === route
                                        ? '#3178c6'
                                        : '#616161'
                                }
                            >
                                {title}
                            </MenuItem>
                        );
                    })}
                </DropdownContentContainer>
            </DropdownContentWrapper>
        </Host>
    );
};
