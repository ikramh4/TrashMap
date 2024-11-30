import React from 'react';
import {
  Dialog,
  DialogContent,
  Avatar,
  Typography,
  Box,
  Divider,
  Stack
} from '@mui/material';
import { LocationOn, Delete, Star } from '@mui/icons-material';

const ProfilePopup = ({ open, onClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 2,
          width: '300px'
        }
      }}
    >
      <DialogContent>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Avatar
            sx={{ 
              width: 80, 
              height: 80, 
              margin: '0 auto',
              mb: 2
            }}
            src="/path-to-profile-pic.jpg"
          />
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2" color="text.secondary">
            @johndoe
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOn color="primary" />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Trash Bins Added
              </Typography>
              <Typography variant="h6">
                24
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Star color="primary" />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Contribution Level
              </Typography>
              <Typography variant="h6">
                Gold
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Delete color="primary" />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Reports Submitted
              </Typography>
              <Typography variant="h6">
                5
              </Typography>
            </Box>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ProfilePopup; 