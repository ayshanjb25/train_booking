import React from 'react';
import { Paper } from '@mantine/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const title = "Track Your Train";

function TrackTrain({ onClose, fromStation, toStation }) {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    mapRef.current = L.map('map', {
      center: [7.11005, 79.7508], // Center between Colombo and Kandy
      zoom: 8, // Adjust the zoom level as needed
    });

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    // Define a custom icon for the markers (red X)
    const redXIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    // Marker for Colombo with red X icon
    const colomboMarker = L.marker([6.9255, 79.8666], { icon: redXIcon }).addTo(mapRef.current).bindPopup('You are here (Colombo)');

    // Marker for Kandy with red X icon
    const kandyMarker = L.marker([7.2955, 80.6350], { icon: redXIcon }).addTo(mapRef.current).bindPopup('Kandy');

    // Create a polyline connecting the two markers
    const polyline = L.polyline([colomboMarker.getLatLng(), kandyMarker.getLatLng()], { color: 'blue' }).addTo(mapRef.current);

    return () => {
      // Clean up the map instance and remove the tile layer
      mapRef.current.remove();
      tileLayer.remove();
    };
  }, []);
// ...
// ...


  return (
    <Paper className="form">
      <div className="container">
        <div className="formContainer">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
            <div style={{ flex: 2 }}>
              <h2 className="title" style={{marginBottom:'20px'}}>{title}</h2>

              <div id="map" style={{ width: '1000px', height: '600px' }} />
              <div style={{display:'flex', flexDirection:'column',gap:'10px',fontSize:'25px', marginTop:'20px', textAlign:'center'}}>
                <p><b>Route :</b> {fromStation} - {toStation}</p>
                <p><b>Distance :</b> 118km</p>
                <p><b>Time :</b> 1hr 55min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default TrackTrain;

