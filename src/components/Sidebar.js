// src/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, IconButton, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ImWindows } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { RiWallet3Line } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 80,
          boxSizing: 'border-box',
          backgroundColor: '#1E1E2F',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid transparent',
        },
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
          <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
            <ImWindows />
          </IconButton>
        </Box>
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'Goals', icon: <BsFileBarGraph /> },
            { text: 'Popular Dishes', icon: <TbReportMoney /> },
            { text: 'Menus', icon: <RiWallet3Line /> },
            { text: 'Menus', icon: <IoBagCheckOutline /> },
          ].map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleTabClick(item.text)}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: item.text === activeTab ? '#4d81b9' : 'white',
                borderRight: item.text === activeTab ? '4px solid #4d81b9' : 'none',
              }}
            >
              <ListItemIcon sx={{ justifyContent: 'center', color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          <IoMdLogOut />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
