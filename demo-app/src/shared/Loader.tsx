import React from 'react';
import styled from 'styled-components';

const Host = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoaderDiv = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    color: red;

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }
        4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }
        5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }

    div {
        position: absolute;
        border: 4px solid #282c34;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;

export const Loader: React.FC = () => {
    return (
        <Host>
            <LoaderDiv>
                <div></div>
                <div></div>
            </LoaderDiv>
            <h4>Loading OpenCV...</h4>
        </Host>
    );
};
