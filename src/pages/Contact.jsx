import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
} from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography paragraph>
              Email: contact@clientcontracttech.com
            </Typography>
            <Typography paragraph>
              Phone: +1 416 547 6638
            </Typography>
            <Typography paragraph>
              Address: 24 Avenue Road, Toronto, Ontario, Canada
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact