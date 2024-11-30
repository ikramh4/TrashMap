import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  const [trashBins, setTrashBins] = useState([]);

  useEffect(() => {
    const fetchTrashBins = async () => {
      try {
        const response = await fetch('/api/trashbins');
        const data = await response.json();
        setTrashBins(data);
      } catch (error) {
        console.error('Error fetching trash bins:', error);
      }
    };

    fetchTrashBins();
  }, []);

  return (
    <MapContainer
      center={[-6.2088, 106.8456]}
      zoom={13}
      style={{ 
        height: '100%', 
        width: '100%',
        zIndex: 1
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {trashBins.map((bin) => (
        <Marker
          key={bin._id}
          position={[bin.latitude, bin.longitude]}
        >
          <Popup>
            <div>
              <h3>Trash Bin</h3>
              <p>{bin.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
