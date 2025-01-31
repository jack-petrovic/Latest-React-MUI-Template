import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const About = () => {
  const team = [
    { name: 'Jack Petrovic', role: 'CEO', bio: 'Experienced leader in technology.' },
    { name: 'Austin Ryder', role: 'CTO', bio: 'Technical expert with 6 years experience.' },
    { name: 'Tomson Ewan', role: 'Lead Developer', bio: 'Full-stack developer extraordinaire.' },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Our Team
      </Typography>
      <Typography paragraph>
        We are a dedicated team of professionals committed to delivering excellence.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name} className="h-full">
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    margin: '10px auto',
                    bgcolor: 'primary.main',
                  }}
                >
                  {member.name[0]}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2">{member.bio}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;