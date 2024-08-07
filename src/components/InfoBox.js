// src/InfoBox.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const InfoBox = () => {
  const items = [
    { text: 'Goals', icon: <EmojiEventsIcon />, color: '#f52c2c' },
    { text: 'Popular Dishes', icon: <RestaurantIcon />, color: '#37379b' },
    { text: 'Menus', icon: <MenuBookIcon />, color: '#2a7d78' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#242121',
        color: 'white',
        borderRadius: 0,
        padding: 0,
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="arrow">
                <ArrowForwardIosIcon style={{ color: 'white' ,backgroundColor:'grey' ,width:'30px',height:'30px',borderRadius:'50%',padding:'5px'}} />
              </IconButton>
            }
          >
            <ListItemIcon
              sx={{
                justifyContent: 'center',
                color: 'white',
                width: 30,
                height: 30,
                backgroundColor: item.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding:1,
              }}
            >
              {React.cloneElement(item.icon, { style: { width: 15, height: 15 } })}
            </ListItemIcon>&nbsp;&nbsp;
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default InfoBox;
