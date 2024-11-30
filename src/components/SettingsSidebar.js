import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import { Close, Language } from '@mui/icons-material';

const SettingsSidebar = ({ open, onClose }) => {
  const [language, setLanguage] = React.useState('en');

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 320 }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Settings
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <Divider />

        <List>
          <ListItem>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Language" />
            <FormControl size="small">
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="id">Indonesian</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SettingsSidebar; 