import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import MetricBox from './MetricBox';
import NetProfitBox from './NetProfitBox';
import InfoBox from './InfoBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const barData = {
    labels: Array.from({ length: 24 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: [12, 19, 3, 5, 2, 3, 10, 12, 15, 22, 30, 50, 60, 45, 50, 55, 70, 80, 75, 60, 50, 40, 30, 20],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const renderStars = (rating) => {
    return (
      <div>
        {Array.from({ length: rating }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: 'yellow' }} />
        ))}
      </div>
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={2}>
          <MetricBox
            title="Total Orders"
            value="75"
            image="/path/to/order-image.png" // Replace with the actual image path
            profit={true}
            change="+5%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <MetricBox
            title="Total Delivered"
            value="70"
            image="/path/to/delivered-image.png" // Replace with the actual image path
            profit={true}
            change="+4%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <MetricBox
            title="Total Cancelled"
            value="5"
            image="/path/to/cancelled-image.png" // Replace with the actual image path
            profit={false}
            change="-1%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <MetricBox
            title="Total Revenue"
            value="$12k"
            image="/path/to/revenue-image.png" // Replace with the actual image path
            profit={true}
            change="+10%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NetProfitBox
            value={6759.25}
            percentage={70}
            profitChange={3}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Bar data={barData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoBox />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Recent Orders</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Order No.</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { name: 'Wade Warren', order: '15478256', amount: '$124.00', status: 'Delivered' },
                    { name: 'Jane Cooper', order: '48965786', amount: '$305.02', status: 'Delivered' },
                    { name: 'Guy Hawkins', order: '78958215', amount: '$45.88', status: 'Cancelled' },
                    { name: 'Kristin Watson', order: '20965732', amount: '$60.00', status: 'Pending' },
                    { name: 'Cody Fisher', order: '95715620', amount: '$545.00', status: 'Delivered' },
                    { name: 'Savannah Nguyen', order: '78514568', amount: '$128.20', status: 'Delivered' },
                  ].map((order, index) => (
                    <TableRow key={index}>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order.order}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{order.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Customer's Feedback</Typography>
            <List>
              {[
                {
                  name: 'Jenny Wilson',
                  avatar: '/static/images/avatar/1.jpg',
                  feedback: 'The food was excellent and so was the service...',
                  rating: 5,
                },
                {
                  name: 'Dianne Russell',
                  avatar: '/static/images/avatar/2.jpg',
                  feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee...',
                  rating: 5,
                },
                {
                  name: 'Devon Lane',
                  avatar: '/static/images/avatar/3.jpg',
                  feedback: 'Normally wings are wings, but theirs are lean, meaty and tender...',
                  rating: 4,
                },
              ].map((feedback, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={feedback.name} src={feedback.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={feedback.name}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'flex' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {renderStars(feedback.rating)}
                          </Typography>
                          {" — " + feedback.feedback}
                        </>
                      }
                    />
                  </ListItem>
                  {index < 2 && <Divider variant="inset" component="li" />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

