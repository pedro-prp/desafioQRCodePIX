import React from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Landing: React.FC = () => {
    const history = useHistory();

    const createQRCode = async () => {
        const body = {
            payer: (document.getElementById('payer-id') as HTMLInputElement).value,
            receiver: (document.getElementById('receiver-id') as HTMLInputElement).value,
            value: (document.getElementById('value') as HTMLInputElement).value

        }

        const response = await api.post('/transactions', body);

        history.push({
            pathname: '/qrcode',
            state: {qrCodeString: response['data']['qrCodeString']}
        });
    };

    return (
        <div id="landing" className="container">
                <form id="payment-form">
                    <div className="input-block">
                        <label htmlFor="time">Payer ID</label>
                        <input type="text" id="payer-id" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Receiver ID</label>
                        <input type="text" id="receiver-id" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Value</label>
                        <input type="text" id="value" />
                    </div>
                    <div className="button-container">
                        <a onClick={createQRCode} className="generate-qrcode">
                            Generate QR code
                        </a>
                    </div>

                   
                </form>
        </div>
    )
};

export default Landing;