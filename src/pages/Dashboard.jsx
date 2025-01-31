import { Box, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box className="w-full">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Summary</Typography>
            {/* Add your dashboard content here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Statistics</Typography>
            {/* Add your dashboard content here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Activity</Typography>
            {/* Add your dashboard content here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard