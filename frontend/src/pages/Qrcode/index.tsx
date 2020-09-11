import React from 'react';
import { useLocation } from 'react-router';

interface qrCodeProps {
    qrCodeString: string;
}

const QRcode: React.FC<qrCodeProps> = (props) => {
    const { state: { qrCodeString } } = useLocation();

    return (
    <h1>{qrCodeString}</h1>
    )
};

export default QRcode;