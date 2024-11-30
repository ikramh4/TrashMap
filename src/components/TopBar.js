import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Avatar,
  Box 
} from '@mui/material';
import { 
  Notifications, 
  Settings 
} from '@mui/icons-material';
import ProfilePopup from './ProfilePopup';
import NotificationsPopup from './NotificationsPopup';
import SettingsSidebar from './SettingsSidebar';

const TopBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          top: 0,
          backgroundColor: 'white',
          color: 'black'
        }}
      >
        <Toolbar>
          <IconButton edge="start" onClick={() => setProfileOpen(true)}>
            <Avatar 
              src="/path-to-profile-pic.jpg" 
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>

          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              textAlign: 'center'
            }}
          >
            TrashMap
          </Typography>

          <Box>
            <IconButton onClick={() => setNotificationsOpen(true)}>
              <Notifications />
            </IconButton>
            <IconButton onClick={() => setSettingsOpen(true)}>
              <Settings />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <ProfilePopup 
        open={profileOpen} 
        onClose={() => setProfileOpen(false)} 
      />
      
      <NotificationsPopup 
        open={notificationsOpen} 
        onClose={() => setNotificationsOpen(false)} 
      />
      
      <SettingsSidebar 
        open={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
      />
    </>
  );
};

export default TopBar; 