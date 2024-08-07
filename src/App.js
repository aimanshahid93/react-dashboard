// src/App.js
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#121212', color: 'white' }}>
        <Navbar />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;
