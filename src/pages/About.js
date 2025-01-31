import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  LinearProgress,
  IconButton,
  Stack,
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  GitHub,
  CheckCircle,
  School,
  Work,
  Email,
} from '@mui/icons-material';
import { useState } from 'react';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const About = () => {
  const [tabValue, setTabValue] = useState(0);

  const team = [
    {
      name: 'Jack Petrovic',
      role: 'CEO',
      bio: 'Experienced leader in technology with over 8 years in the industry.',
      skills: [
        { name: 'Leadership', level: 95 },
        { name: 'Strategy', level: 90 },
        { name: 'Innovation', level: 85 },
      ],
      education: [
        'MBA, Harvard Business School',
        'BS Computer Science, MIT',
      ],
      experience: [
        'CEO at Current Company (2020-Present)',
        'CTO at Previous Corp (2015-2020)',
        'Senior Developer at First Job (2010-2015)',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Tomson Ewan',
      role: 'CTO',
      bio: 'Technical expert with deep knowledge in cloud architecture and AI.',
      skills: [
        { name: 'Cloud Architecture', level: 95 },
        { name: 'AI/ML', level: 90 },
        { name: 'System Design', level: 88 },
      ],
      education: [
        'PhD in Computer Science, Stanford',
        'MS Computer Engineering, Berkeley',
      ],
      experience: [
        'CTO at Current Company (2019-Present)',
        'Lead Architect at Tech Corp (2016-2019)',
        'Senior Engineer at Start Inc (2013-2016)',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Austin Ryder',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies.',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'DevOps', level: 85 },
      ],
      education: [
        'BS Software Engineering, Georgia Tech',
        'Web Development Bootcamp, Code School',
      ],
      experience: [
        'Lead Developer at Current Company (2021-Present)',
        'Senior Developer at Dev Corp (2018-2021)',
        'Frontend Developer at Web Co (2016-2018)',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Our Team
      </Typography>
      <Typography paragraph>
        We are a dedicated team of professionals committed to delivering excellence
        in technology solutions.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {team.map((member) => (
          <Grid item xs={12} md={4} key={member.name}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      margin: '0 auto 16px',
                      bgcolor: 'primary.main',
                      fontSize: '3rem',
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
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton color="primary" href={member.social.linkedin}>
                      <LinkedIn />
                    </IconButton>
                    <IconButton color="primary" href={member.social.twitter}>
                      <Twitter />
                    </IconButton>
                    <IconButton color="primary" href={member.social.github}>
                      <GitHub />
                    </IconButton>
                    <IconButton color="primary">
                      <Email />
                    </IconButton>
                  </Stack>
                </Box>

                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  centered
                  sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                  <Tab label="Overview" />
                  <Tab label="Skills" />
                  <Tab label="Experience" />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                  <Typography paragraph>{member.bio}</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Education
                    </Typography>
                    <List dense>
                      {member.education.map((edu, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <School fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={edu} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Box sx={{ mt: 2 }}>
                    {member.skills.map((skill) => (
                      <Box key={skill.name} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">{skill.name}</Typography>
                          <Typography variant="body2">{skill.level}%</Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{ height: 6, borderRadius: 3 }}
                        />
                      </Box>
                    ))}
                  </Box>
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                  <List dense>
                    {member.experience.map((exp, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <Work fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={exp} />
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Company Values
        </Typography>
        <Grid container spacing={3}>
          {[
            'Innovation',
            'Excellence',
            'Integrity',
            'Collaboration',
            'Customer Focus',
            'Continuous Learning',
          ].map((value) => (
            <Grid item key={value}>
              <Chip
                icon={<CheckCircle />}
                label={value}
                color="primary"
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Achievements
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h2" color="primary" gutterBottom>
                  100+
                </Typography>
                <Typography variant="h6">Successful Projects</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h2" color="primary" gutterBottom>
                  50+
                </Typography>
                <Typography variant="h6">Global Clients</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h2" color="primary" gutterBottom>
                  10+
                </Typography>
                <Typography variant="h6">Years of Excellence</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;