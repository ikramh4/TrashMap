import React from 'react';
import { Box } from '@mui/material';
import Map from './Map';

const MainPage = () => {
  return (
    <Box sx={{ 
      height: 'calc(100vh - 128px)',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Map />
    </Box>
  );
};

export default MainPage;
