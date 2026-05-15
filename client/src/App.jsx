import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'leaflet/dist/leaflet.css';
import Mapa from './components/mapa';
import Pesquisa from './components/pesquisa';

function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div className='index-pai'>
            <Pesquisa onSearch={(lat, long) => setMarkers(prev => {
              const AlreadyExists = prev.some(marker => marker[0] === lat && marker[1] === long);
              if(AlreadyExists){
                return prev;
              }
              return [...prev, [lat, long]];
            })} />
            <Mapa newMarkers={markers} />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
