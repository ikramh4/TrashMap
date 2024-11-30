import React from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Divider
} from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';

const ProfilePage = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 128px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Welcome to TrashMap
        </Typography>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Don't have an account? Sign Up
        </Typography>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<Google />}
          sx={{ mb: 2 }}
        >
          Continue with Google
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<Facebook />}
          sx={{ mb: 2 }}
        >
          Continue with Facebook
        </Button>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
