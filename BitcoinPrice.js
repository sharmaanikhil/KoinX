// src/BitcoinPrice.js
import React, { useState, useEffect } from 'react';

function BitcoinPrice() {
    const [price, setPrice] = useState({ usd: 0, inr: 0, usdChange: 0 });

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true')
        .then(response => response.json())
        .then(data => {
            setPrice({
                usd: data.bitcoin.usd,
                inr: data.bitcoin.inr,
                usdChange: data.bitcoin.usd_24h_change.toFixed(2)
            });
        });
    }, []);

    return (
        <div>
            <p>Bitcoin Price (USD): ${price.usd} ({price.usdChange}%)</p>
            <p>Bitcoin Price (INR): ₹{price.inr}</p>
        </div>
    );
}

export default BitcoinPrice;
