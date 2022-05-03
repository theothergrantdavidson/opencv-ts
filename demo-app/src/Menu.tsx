import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UsingOpencvTs } from './using-opencv-ts/using-opencv-ts';

const Host = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px lightgray solid;
    display: flex;
    align-items: center;
    background-color: #3178c6;
`;

const TextContainer = styled.div`
    padding-left: 12px;
    font-family: 'Hind', sans-serif;
    color: white;
    font-size: x-large;
`;

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export const Menu = () => {
    return (
        <Host>
            <TextContainer>opencv-ts</TextContainer>
            <Router>
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/users">Users</Link>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Host>
    );
};
