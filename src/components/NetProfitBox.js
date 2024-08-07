import React from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';
import { MdArrowDropUp } from "react-icons/md";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const NetProfitBox = ({ value, percentage, profitChange }) => {
  const displayValue = typeof value === 'number' ? value.toFixed(2) : '0.00';
  const displayPercentage = typeof percentage === 'number' ? percentage : 0;
  const isProfitPositive = profitChange >= 0;

  return (
    <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', backgroundColor: '##121212', color: '#FFF', borderRadius: '5px' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 500, textAlign: 'left' }}>Net Profit</Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign: 'left' }}>${displayValue}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          {isProfitPositive ? (
            <MdArrowDropUp  sx={{ color: '#1b8b29', marginRight: 1 }} />
          ) : (
            <ArrowDownwardIcon sx={{ color: '#FF5C5C', marginRight: 1 }} />
          )}
          <Typography variant="body2" sx={{ color: isProfitPositive ? '#1b8b29' : '#FF5C5C' }}>
            {Math.abs(profitChange)}%
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'left' }}>Order Completion</Typography>
      </Box>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={displayPercentage} size={80} thickness={4} sx={{ color: '#00D1FF' }} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" component="div" color="#00D1FF">
            {`${displayPercentage}%`}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default NetProfitBox;
