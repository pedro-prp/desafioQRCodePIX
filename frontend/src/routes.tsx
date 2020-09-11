import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import QRcode from './pages/Qrcode';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/qrcode" component={QRcode} />
        </BrowserRouter>
    );
}

export default Routes;
