import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';

const Mapa = ({ newMarkers = [] }) => {

return (
    <div className="bucetadecontainer">
        <div className="abaMapa">
            <div className="cont-mapa">
                <MapContainer center={[-23.697884212973907, -46.76594160336756]} zoom={18} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker position={[-23.697884212973907, -46.76594160336756]}>
                        <Popup>
                            <h1>TEL AVIV</h1>
                            <p>Israel</p>
                            <p>Diretor: Netanyahu</p>
                            <p>longitude: {-46.76594160336756}</p>
                            <p>latitude: {-23.697884212973907}</p>
                        </Popup>
                    </Marker>

                    {newMarkers.map((marker, index) => (
                        <Marker key={index} position={marker}>
                            <Popup>
                                <h1>Marcador Criado</h1>
                                <p>Latitude: {marker[0]}</p>
                                <p>Longitude: {marker[1]}</p>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    </div>
);
};

export default Mapa;