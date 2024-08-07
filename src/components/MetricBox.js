// src/components/MetricBox.js
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { LiaCartPlusSolid } from "react-icons/lia";

const MetricBox = ({ title, value, image, profit, change }) => {
  return (
    <Paper sx={{ padding: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="box1" > 
        {/* <img src={image} alt={title} style={{ width: 70, height: 50 ,display:'flex', flexDirection:'column'}} /> */}
        <LiaCartPlusSolid style={{ width: 70, height: 50 ,display:'flex', flexDirection:'column'}}/>
        <Typography variant="h6" sx={{ marginTop: 1 }}>{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: 1 }}>
        <Typography variant="h4">{value}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: profit ? 'green' : 'red' }}>
          {profit ? <MdArrowDropUp /> : <MdArrowDropDown />}
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{change}</Typography>
        </Box>
      </Box>
      </div>
    </Paper>
  );
};

export default MetricBox;

