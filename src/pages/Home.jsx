import {
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Rating,
  Stack,
  Divider,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Speed,
  Security,
  Code,
  CloudDone,
  Star,
} from '@mui/icons-material';

function Home() {
  const features = [
    {
      icon: <Speed />,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience.',
    },
    {
      icon: <Security />,
      title: 'Secure',
      description: 'Enterprise-grade security for your peace of mind.',
    },
    {
      icon: <Code />,
      title: 'Modern Tech Stack',
      description: 'Built with the latest and greatest technologies.',
    },
    {
      icon: <CloudDone />,
      title: 'Cloud Native',
      description: 'Designed for modern cloud infrastructure.',
    },
  ];

  const steps = [
    'Sign Up',
    'Complete Profile',
    'Explore Features',
    'Start Building',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'Tech Corp',
      avatar: 'S',
      comment: 'Amazing platform that has transformed our workflow.',
      rating: 5,
    },
    {
      name: 'Mike Wilson',
      role: 'Developer',
      company: 'StartUp Inc',
      avatar: 'M',
      comment: 'The best development experience I\'ve had.',
      rating: 4,
    },
  ];

  return (
    <Container>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Our Platform
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Build amazing applications with our powerful tools
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button variant="contained" size="large">
            Get Started
          </Button>
          <Button variant="outlined" size="large">
            Learn More
          </Button>
        </Stack>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    margin: '0 auto 16px',
                    width: 56,
                    height: 56,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Getting Started Stepper */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Getting Started
        </Typography>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Statistics */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary">1M+</Typography>
              <Typography variant="h6">Users</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary">50K+</Typography>
              <Typography variant="h6">Projects</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary">99.9%</Typography>
              <Typography variant="h6">Uptime</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Testimonials */}
      <Typography variant="h4" gutterBottom textAlign="center">
        What Our Users Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }}>{testimonial.avatar}</Avatar>
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role} at {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={testimonial.rating} readOnly icon={<Star />} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  "{testimonial.comment}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home