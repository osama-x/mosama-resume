import React from 'react';
import { Box, Typography, Grid, Chip, Divider, Link } from '@mui/material';

// Technology data
const technologies = [
  'Backend Technologies','Full-Stack', 'Python', 'REST', 'Flask', 'Django', 'Neo4j', 'MongoDB', 'Redis', 'Elasticsearch', 'PostgreSQL',
  'Shell Scripting', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'Apache Kafka', 'Jira',
  'GraphQL', 'Email Processing (Sendgrid)', 'React', 'Linux'
];

const Summary = () => {
  return (
    <Box sx={{ p: 3, position:'fixed',}}>
      {/* About Section */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        Muhammad Osama is a highly skilled Senior Back-End Engineer with over four years of experience in developing, deploying, and maintaining scalable and robust back-end systems. He has a proven track record in Python development, specializing in microservices architecture on Google Cloud Platform (GCP) using Kubernetes and Docker. Osama excels in creating efficient, message-driven APIs and services, and he possesses strong expertise in various databases, including Neo4j, MongoDB, Elasticsearch, and PostgreSQL. His background also includes significant experience in cybersecurity and vulnerability management, ensuring secure and reliable software solutions. Known for his leadership capabilities, Osama has led back-end teams to successful project completions, seamlessly collaborating with clients, UX designers, and front-end developers. He is passionate about problem-solving and continuously enhancing his skills to deliver high-quality software solutions.
      </Typography>
      <Divider sx={{ my: 3 }} />
      
      {/* Technologies Section */}
      <Typography variant="h4" gutterBottom sx={{mb: 5}}>
        Experience
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {technologies.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            sx={{
              bgcolor: 'primary.blueish',
              color: 'primary.text',
              fontSize: '1rem',
              p: 2,
              borderRadius: '20px',
              fontWeight: 'bold',
              m: 1,
              boxShadow: 3,
              ':hover': {
                bgcolor: 'primary.light',
                color: 'primary.main',
                transform: 'scale(1.1)',
                transition: '0.3s'
              }
            }}
          />
        ))}
      </Grid>
      <Box sx={{ textAlign: 'right', mt: 3 }}>
        <Link href="/technologies" underline="none" sx={{ fontSize: '1rem', color: '#757575' }}>
          more in Technologies Section
        </Link>
      </Box>
    </Box>
  );
};

export default Summary;
