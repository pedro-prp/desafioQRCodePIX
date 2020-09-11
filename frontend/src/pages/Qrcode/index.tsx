import React from 'react';
import { useLocation } from 'react-router';
import QRCode from 'qrcode.react';


const QRcode: React.FC = (props) => {
    const { state: { qrCodeString } } = useLocation();

    console.log(qrCodeString);

    return (
        <QRCode value={ qrCodeString } />
    )
};

export default QRcode;