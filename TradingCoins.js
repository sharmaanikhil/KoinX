// src/TrendingCoins.js
import React, { useState, useEffect } from 'react';

function TradingCoins() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
        .then(response => response.json())
        .then(data => {
            setCoins(data.coins.slice(0, 3)); // Get top 3 trending coins
        });
    }, []);

    return (
        <div>
            {coins.map((coin, index) => (
                <div key={index}>
                    <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
                    <img src={coin.item.small} alt={coin.item.name} />
                </div>
            ))}
        </div>
    );
}

export default TradingCoins;
