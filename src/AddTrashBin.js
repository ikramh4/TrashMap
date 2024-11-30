import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTrashBin = ({ onAdd }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ latitude, longitude, description });
    setLatitude('');
    setLongitude('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Trash Bin
      </Button>
    </Box>
  );
};

export default AddTrashBin;
