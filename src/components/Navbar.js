// src/components/Navbar.js
import React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CiMail, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E1E2F',
        padding: '10px 20px',
        borderRadius: 0,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: 'white' }} />
            </InputAdornment>
          ),
          style: { color: 'white' },
        }}
        sx={{
          backgroundColor: '#2f2e2e',
          borderRadius: '10px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
              borderRadius: '5px',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
          width: '280px',
          height: '50px', // Reduced height of the search bar
          padding: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> {/* Added gap between icons */}
        <CiMail style={{ color: 'white', backgroundColor: 'grey', borderRadius: '50%', padding: '5px', fontSize: '24px' }} />
        <CiSettings style={{ color: 'white', backgroundColor: 'grey', borderRadius: '50%', padding: '5px', fontSize: '24px' }} />
        <IoIosNotificationsOutline style={{ color: 'white', backgroundColor: 'grey', borderRadius: '50%', padding: '5px', fontSize: '24px' }} />
        <IconButton>
          <AccountCircleIcon style={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;

