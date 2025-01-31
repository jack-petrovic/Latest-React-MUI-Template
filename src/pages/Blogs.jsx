import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const Blogs = () => {
  const blogs = [
    {
      title: 'Getting Started with React',
      description: 'Learn the basics of React and start building web applications.',
      image: 'https://source.unsplash.com/random/800x600?react',
      date: '2024-02-20',
    },
    {
      title: 'Material UI Best Practices',
      description: 'Tips and tricks for building better UIs with Material UI.',
      image: 'https://source.unsplash.com/random/800x600?ui',
      date: '2024-02-19',
    },
    {
      title: 'Web Development Trends 2024',
      description: 'Explore the latest trends in web development.',
      image: 'https://source.unsplash.com/random/800x600?code',
      date: '2024-02-18',
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {blog.date}
                  </Typography>
                  <Typography variant="body2">
                    {blog.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;