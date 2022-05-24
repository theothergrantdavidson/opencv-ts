import React, { useState } from 'react';
import cv from 'opencv-ts';
import { CvContext } from './cv/useOpencv';
import { Loader } from './shared/Loader';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dropdown } from './components/Dropdown';
import { IntroductionToUsingOpencv } from './IntroductionToOpencvTS/IntroductionToUsingOpencv';
import { UsingOpencv } from './IntroductionToOpencvTS/UsingOpencv';

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

const ContentHost = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Content = styled.div`
    width: calc(100vw - 200px);
    height: 100%;
    padding: 12px;
`;

const Sidebar = styled.div`
    width: 300px;
    height: 100%;
    background-color: #f2f2f2;
`;

function App() {
    const [_cv, setCv] = useState<typeof cv>();
    cv.onRuntimeInitialized = () => setCv(cv);

    return (
        <AppHost className="App">
            <Menubar>
                <TextContainer>opencv-ts</TextContainer>
            </Menubar>
            <CvContext.Provider value={_cv}>
                <ContentHost>
                    <Router>
                        <Sidebar>
                            <Dropdown
                                title="Introduction to opencv-ts"
                                menuItems={[
                                    {
                                        route: '/using-opencv-ts',
                                        title: 'using opencv-ts'
                                    }
                                ]}
                            />
                        </Sidebar>
                        {_cv == undefined ? (
                            <Loader />
                        ) : (
                            <Content>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<IntroductionToUsingOpencv />}
                                    />
                                    <Route
                                        path="/using-opencv-ts"
                                        element={<UsingOpencv />}
                                    />
                                </Routes>
                            </Content>
                        )}
                    </Router>
                </ContentHost>
            </CvContext.Provider>
        </AppHost>
    );
}

export default App;
