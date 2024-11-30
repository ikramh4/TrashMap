import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Map, AddLocation, AccountCircle } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPathValue = () => {
    switch (location.pathname) {
      case '/map':
        return 0;
      case '/add':
        return 1;
      case '/profile':
        return 2;
      default:
        return 0;
    }
  };

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000
      }} 
      elevation={3}
    >
      <BottomNavigation
        value={getPathValue()}
        onChange={(event, newValue) => {
          switch (newValue) {
            case 0:
              navigate('/map');
              break;
            case 1:
              navigate('/add');
              break;
            case 2:
              navigate('/profile');
              break;
            default:
              navigate('/map');
          }
        }}
      >
        <BottomNavigationAction label="Map" icon={<Map />} />
        <BottomNavigationAction label="Add" icon={<AddLocation />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
