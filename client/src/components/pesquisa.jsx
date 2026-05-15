import React, { useState } from 'react';
import '../App.css';

const Pesquisa = ({ onSearch }) => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    const handleSearch = () => {
        if (lat && long) {
            onSearch(parseFloat(lat), parseFloat(long));
        }
    };

    return (
        <div className="container-pesquisa">
            <div className="abaPesquisa">
                <div className="cont-search">
                    <input type="number" placeholder="latitude..." className='pesquisa' value={lat} onChange={(e) => setLat(e.target.value)} />
                    <input type="number" placeholder="longitude..." className='pesquisa' value={long} onChange={(e) => setLong(e.target.value)} />
                    <button className="btn-pesquisa" onClick={handleSearch}>Pesquisar</button>
                </div>
            </div>
        </div>
    )
}

export default Pesquisa