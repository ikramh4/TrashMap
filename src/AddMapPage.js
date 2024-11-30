import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Paper, 
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationPicker = ({ onLocationSelect }) => {
  const [marker, setMarker] = useState(null);

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setMarker({ lat, lng });
      onLocationSelect({ lat, lng });
    },
  });

  return marker ? <Marker position={marker} /> : null;
};

const AddMapPage = () => {
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState('');
  const [binType, setBinType] = useState('general');
  const [capacity, setCapacity] = useState('medium');

  const handleSubmit = async () => {
    if (!location) {
      alert('Please select a location on the map');
      return;
    }

    const trashBinData = {
      latitude: location.lat,
      longitude: location.lng,
      description,
      binType,
      capacity,
    };

    try {
      const response = await fetch('/api/trashbins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trashBinData),
      });

      if (response.ok) {
        alert('Trash bin location added successfully!');
        setDescription('');
        setLocation(null);
        setBinType('general');
        setCapacity('medium');
      }
    } catch (error) {
      console.error('Error adding trash bin:', error);
      alert('Failed to add trash bin location');
    }
  };

  return (
    <Box sx={{ 
      height: 'calc(100vh - 128px)',
      overflow: 'auto',
      p: 2,
      pt: 2
    }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Add New Trash Bin</Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          height: '300px',
          mb: 2,
          overflow: 'hidden'
        }}
      >
        <MapContainer
          center={[-6.2088, 106.8456]}
          zoom={13}
          style={{ 
            height: '100%', 
            width: '100%'
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <LocationPicker onLocationSelect={setLocation} />
        </MapContainer>
      </Paper>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Bin Type</InputLabel>
        <Select
          value={binType}
          onChange={(e) => setBinType(e.target.value)}
        >
          <MenuItem value="general">General Waste</MenuItem>
          <MenuItem value="recycle">Recyclable</MenuItem>
          <MenuItem value="organic">Organic</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Capacity</InputLabel>
        <Select
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        >
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button 
        variant="contained" 
        onClick={handleSubmit}
        disabled={!location}
        fullWidth
        sx={{ mb: 2 }}
      >
        Add Trash Bin
      </Button>
    </Box>
  );
};

export default AddMapPage;
