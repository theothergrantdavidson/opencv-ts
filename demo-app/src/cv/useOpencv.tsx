import cv from 'opencv-ts';
import { useContext, createContext } from 'react';

export const CvContext = createContext<typeof cv | undefined>(undefined);

export const useOpenCV = () => {
    const cv = useContext(CvContext);
    return cv;
};
