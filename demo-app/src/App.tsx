import React, { useState } from 'react';
import cv from 'opencv-ts';
import { CvContext } from './cv/useOpencv';
import { Loader } from './shared/Loader';
import { Menu } from './Menu';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Caret } from './icons/caret';

const AppHost = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const Menubar = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px lightgray solid;
    display: flex;
    align-items: center;
    background-color: #3178c6;
    color: white;
`;

const TextContainer = styled.div`
    padding-left: 12px;
    font-family: 'Hind', sans-serif;
    color: white;
    font-size: x-large;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-left: 12px;
    width: inherit;
    height: 50px;
    font-family: 'Catamaran', sans-serif;
    font-weight: 600;
    color: #616161;
    font-size: larger;
    :hover {
        cursor: pointer;
        background-color: #e0e0e0;
        color: #3178c6 ;
    }
`;

const ContentHost = styled.div`
    width: 100%;
`;

const Sidebar = styled.div`
    width: 200px;
    height: 100%;
    background-color: #f2f2f2;
`;

function Home() {
    return <h2>Home</h2>;
}

function App() {
    const [_cv, setCv] = useState<typeof cv>();
    cv.onRuntimeInitialized = () => setCv(cv);

    return (
        <AppHost className="App">
            <CvContext.Provider value={_cv}>
                <Router>
                    <Menubar>
                        <TextContainer>opencv-ts</TextContainer>
                    </Menubar>
                    <Sidebar>
                        <StyledLink to="/">Home</StyledLink><Caret/>
                    </Sidebar>
                    {_cv == undefined ? (
                        <Loader />
                    ) : (
                        <ContentHost>
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </ContentHost>
                    )}
                </Router>
            </CvContext.Provider>
        </AppHost>
    );
}

export default App;
