import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@mui/material';
import { Announcement, Info } from '@mui/icons-material';

const NotificationsPopup = ({ open, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'announcement',
      title: 'New Feature Available!',
      message: 'You can now add images to your trash bin locations.',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'info',
      title: 'Welcome to TrashMap',
      message: 'Thank you for joining our community!',
      time: '1 day ago'
    }
  ];

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 2,
          width: '350px'
        }
      }}
    >
      <DialogTitle>Notifications</DialogTitle>
      <DialogContent>
        <List>
          {notifications.map((notification) => (
            <ListItem key={notification.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {notification.type === 'announcement' ? <Announcement /> : <Info />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={notification.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      {notification.message}
                    </Typography>
                    <Typography variant="caption" display="block" color="text.secondary">
                      {notification.time}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationsPopup;
