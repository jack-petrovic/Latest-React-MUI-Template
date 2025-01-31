import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Stack,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
} from '@mui/icons-material';
import { useState } from 'react';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false,
  });

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Sales',
    'Partnership',
    'Other',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    // Add your contact form submission logic here
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'subscribe' ? checked : value
    }));
  };

  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', color: '#1877f2' },
    { icon: <Twitter />, name: 'Twitter', color: '#1da1f2' },
    { icon: <LinkedIn />, name: 'LinkedIn', color: '#0a66c2' },
    { icon: <WhatsApp />, name: 'WhatsApp', color: '#25d366' },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    {subjects.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="Subscribe to our newsletter"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>+1 234 567 890</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>contact@example.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>
                      123 Business Street,
                      <br />
                      City, Country
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Follow Us
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                  {socialLinks.map((social) => (
                    <Tooltip title={social.name} key={social.name}>
                      <IconButton sx={{ color: social.color }}>
                        {social.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Business Hours
                </Typography>
                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Monday - Friday:</Typography>
                    <Typography>9:00 AM - 6:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Saturday:</Typography>
                    <Typography>10:00 AM - 4:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Sunday:</Typography>
                    <Typography>Closed</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
        >
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;