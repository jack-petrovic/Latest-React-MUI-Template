import { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  LinearProgress,
  Card,
  CardContent,
  Alert,
  Stack,
  Chip,
  IconButton,
  Box,
} from '@mui/material';
import {
  Notifications,
  TrendingUp,
  People,
  AttachMoney,
  Email,
  Warning,
  Delete,
} from '@mui/icons-material';

const Dashboard = () => {
  const [notifications] = useState([
    { id: 1, text: 'New user registration', time: '5 minutes ago' },
    { id: 2, text: 'Server update completed', time: '2 hours ago' },
    { id: 3, text: 'Payment received', time: '1 day ago' },
  ]);

  const stats = [
    { icon: <TrendingUp />, title: 'Sales', value: '$23,000', color: '#2196f3' },
    { icon: <People />, title: 'Users', value: '1,234', color: '#4caf50' },
    { icon: <AttachMoney />, title: 'Revenue', value: '$45,000', color: '#ff9800' },
    { icon: <Email />, title: 'Messages', value: '321', color: '#f44336' },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: stat.color, mr: 2 }}>{stat.icon}</Avatar>
                  <Typography variant="h6">{stat.title}</Typography>
                </Box>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Progress Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Project Progress</Typography>
            <Stack spacing={2}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Website Redesign</Typography>
                  <Typography variant="body2">80%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={80} />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Mobile App</Typography>
                  <Typography variant="body2">45%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={45} />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Database Migration</Typography>
                  <Typography variant="body2">65%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={65} />
              </Box>
            </Stack>
          </Paper>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Notifications
            </Typography>
            <List>
              {notifications.map((notification, index) => (
                <div key={notification.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end">
                        <Delete />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <Notifications />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.text}
                      secondary={notification.time}
                    />
                  </ListItem>
                  {index < notifications.length - 1 && <Divider />}
                </div>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* System Status */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>System Status</Typography>
            <Stack spacing={2}>
              <Alert severity="success">All systems operational</Alert>
              <Alert severity="warning" icon={<Warning />}>
                Server maintenance scheduled for tonight
              </Alert>
              <Box sx={{ mt: 2 }}>
                <Stack direction="row" spacing={1}>
                  <Chip label="Database: Online" color="success" />
                  <Chip label="API: Stable" color="success" />
                  <Chip label="Cache: Warning" color="warning" />
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;