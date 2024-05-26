import React from 'react';
import { Box, Typography, Grid, Chip, Divider, Link, Card, CardContent, CardActions } from '@mui/material';

// Technology data
const technologies = [
  'Backend Technologies', 'Full-Stack', 'Python', 'REST', 'Flask', 'Django', 'Neo4j', 'MongoDB', 'Redis', 'Elasticsearch', 'PostgreSQL',
  'Shell Scripting', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'Apache Kafka', 'Jira',
  'GraphQL', 'Email Processing (Sendgrid)', 'React', 'Linux'
];

const Summary = () => {
  return (
    <Box sx={{ p: 3, position: 'fixed' }}>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="body1" paragraph> 
              Passionate Full-Stack Developer with 5 years of Python mastery. Developed full scale backend
              systems utilizing microservices architecture for back-end, making architectural and business logic
              decisions, working on front-end technologies and exploring DevOps and data engineering for making
              robust systems. Leading back-end teams and collaborating effectively across projects. Designed and
              deployed Python-powered microservices using Kubernetes and Docker on Google Cloud Platform. Data
              expertise in NoSQL (Neo4j, MongoDB, Elasticsearch) and SQL. Worked on cyber security related
              products and vulnerability management. Experience with direct client communication and resolving the
              payment processing related issues.
          </Typography>
        </CardContent>
      </Card>

      <Divider sx={{ my: 3 }} />
      
      {/* Technologies Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
        Expertise
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
        <Link href="/skills" underline="none" sx={{ fontSize: '1rem', color: '#757575' }}>
          more in Technologies Section
        </Link>
      </Box>
    </Box>
  );
};

export default Summary;
