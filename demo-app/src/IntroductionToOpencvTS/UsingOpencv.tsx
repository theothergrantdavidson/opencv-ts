import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CodeViewer } from '../components/CodeViewer';
import { useOpenCV } from '../cv/useOpencv';
import cv from 'opencv-ts';
const Host = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Image = styled.img`
    width: auto;
    height: auto;
`;

const ImageContainer = styled.div`
    width: 45%;
    height: 100%;
    max-width: 500px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CanvasContainer = styled.div`
    width: 100%;
    height: 50%;
    max-height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ControlsBar = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

const OutputCanvas = styled.canvas`
    width: 500px;
    height: 500px;
`;

const Input = styled.input``;

export const UsingOpencv = () => {
    const cv = useOpenCV();
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const imgRefTo = React.useRef<HTMLCanvasElement>(null);
    const imgRefFrom = React.useRef<HTMLImageElement>(null);

    if (!cv) {
        return null;
    }

    useEffect(() => {
        if (imageUrl !== undefined && imgRefTo.current && imgRefFrom.current) {
            
            const mat = cv.imread("img");
            //cv.imshow(imgRefTo.current, mat);
        }
    }, [imageUrl]);

    return (
        <Host>
            <CanvasContainer>
                <ImageContainer>
                    <Image id="img" ref={imgRefFrom} src={imageUrl} />
                </ImageContainer>
                <ImageContainer>
                    <OutputCanvas ref={imgRefTo} />
                </ImageContainer>
            </CanvasContainer>
            <ControlsBar>
                <Input
                    type="file"
                    onChange={(e) => {
                        if (e.target.files && e.target.files?.length > 0) {
                            setImageUrl(URL.createObjectURL(e.target.files[0]));
                        }
                    }}
                />
            </ControlsBar>
            <CodeViewer>
                {`import cv from 'opencv-ts'

const imgElement = document.getElementById('imageSrc');
const inputElement = document.getElementById('fileInput');

cv.onRuntimeInitialized = () => {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
};

inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function() {
    const mat = cv.imread(imgElement);
    cv.imshow('canvasOutput', mat);
    mat.delete();
};`}
            </CodeViewer>
        </Host>
    );
};
