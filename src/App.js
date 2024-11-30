import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import MainPage from './MainPage';
import AddMapPage from './AddMapPage';
import ProfilePage from './ProfilePage';
import './index.css';

function App() {
  return (
    <Router>
      <Box sx={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <TopBar />
        <Box sx={{ 
          flex: 1,
          overflow: 'hidden',
          mt: '64px' // TopBar height
        }}>
          <Routes>
            <Route path="/map" element={<MainPage />} />
            <Route path="/add" element={<AddMapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<Navigate to="/map" replace />} />
          </Routes>
        </Box>
        <BottomNav />
      </Box>
    </Router>
  );
}

export default App;
