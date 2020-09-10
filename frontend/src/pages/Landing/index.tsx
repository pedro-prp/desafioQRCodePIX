import React, { useCallback } from 'react';
import api from '../../services/api';

const Landing: React.FC = () => {

    const createQRCode = (): void => {
        let payer = (document.getElementById('payer-id') as HTMLInputElement).value
        let receiver = (document.getElementById('receiver-id') as HTMLInputElement).value
        let value = (document.getElementById('value') as HTMLInputElement).value

        console.log(payer + receiver + value);
    };

    return (
        <div id="page-landing">
            <div className="Input">
                <div>
                    <p>Payer ID</p>
                    <input type="text" id='payer-id' name='Payer ID' />
                </div>
                <div>
                    <p>Receiver ID</p>
                    <input type="text" id='receiver-id' name='Receiver ID' />
                </div>
                <div>
                    <p>Value</p>
                    <input type="text" id='value' name='value' />
                </div>
            </div>
            <button onClick={createQRCode}>Generate QR code</button>
        </div>
    )
}

export default Landing;