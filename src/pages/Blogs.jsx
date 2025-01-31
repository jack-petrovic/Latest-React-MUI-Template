import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Chip,
  Box,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Search,
  Favorite,
  Share,
  MoreVert,
  BookmarkBorder,
  Comment,
} from '@mui/icons-material';
import { useState } from 'react';

const Blogs = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const blogs = [
    {
      title: 'Getting Started with React',
      description: 'Learn the basics of React and start building web applications.',
      image: 'https://source.unsplash.com/random/800x600?react',
      date: '2024-02-20',
      author: 'John Doe',
      avatar: 'J',
      tags: ['React', 'JavaScript', 'Web Development'],
      likes: 156,
      comments: 23,
    },
    {
      title: 'Material UI Best Practices',
      description: 'Tips and tricks for building better UIs with Material UI.',
      image: 'https://source.unsplash.com/random/800x600?ui',
      date: '2024-02-19',
      author: 'Jane Smith',
      avatar: 'J',
      tags: ['Material UI', 'Design', 'Frontend'],
      likes: 89,
      comments: 12,
    },
    {
      title: 'Web Development Trends 2024',
      description: 'Explore the latest trends in web development.',
      image: 'https://source.unsplash.com/random/800x600?code',
      date: '2024-02-18',
      author: 'Mike Johnson',
      avatar: 'M',
      tags: ['Trends', 'Web Development', 'Technology'],
      likes: 234,
      comments: 45,
    },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Blog Posts
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="All" color="primary" onClick={() => {}} />
          <Chip label="React" onClick={() => {}} />
          <Chip label="JavaScript" onClick={() => {}} />
          <Chip label="Design" onClick={() => {}} />
          <Chip label="Technology" onClick={() => {}} />
        </Box>
      </Box>

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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {blog.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ width: 24, height: 24, mr: 1 }}>{blog.avatar}</Avatar>
                        <Typography variant="body2" color="text.secondary">
                          {blog.author} • {blog.date}
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton onClick={handleMenuClick}>
                      <MoreVert />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {blog.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {blog.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                  <IconButton size="small">
                    <Favorite />
                  </IconButton>
                  <Typography variant="body2" component="span">
                    {blog.likes}
                  </Typography>
                  <IconButton size="small">
                    <Comment />
                  </IconButton>
                  <Typography variant="body2" component="span">
                    {blog.comments}
                  </Typography>
                </Box>
                <Box>
                  <IconButton size="small">
                    <BookmarkBorder />
                  </IconButton>
                  <IconButton size="small">
                    <Share />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination count={10} color="primary" />
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Save</MenuItem>
        <MenuItem onClick={handleMenuClose}>Share</MenuItem>
        <MenuItem onClick={handleMenuClose}>Report</MenuItem>
      </Menu>
    </Container>
  );
};

export default Blogs;