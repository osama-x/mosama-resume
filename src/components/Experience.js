import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const experiences = [
  {
    title: "Senior Back-end Engineer",
    company: "Technogenics",
    date: "2021-Present",
    description: "Working as a senior software engineer at a cyber security organization with international clients, working on back-end technologies along with cyber security solutions planning and delivery.",
    highlights: [
      { title: "Project Leadership", content: "Demonstrated success in planning, managing, and delivering projects on time. Adept at leading back-end development teams, fostering collaboration with cross-functional teams, and utilizing Jira for efficient project tracking during sprints." },
      { title: "API Development & Deployment", content: "Made architecture, built, and deployed robust RESTful and GraphQL APIs using Flask and Django frameworks. Adept at designing clean and efficient APIs for scalability and maintainability." },
      { title: "NoSQL Expertise", content: "Extensive experience with NoSQL databases including Neo4j, MongoDB, Redis, and Elasticsearch. Possesses strong skills in data modeling, indexing, query optimization, and caching strategies to ensure optimal performance." },
      { title: "Real-time Data Streaming", content: "Leveraged Apache Kafka to design and implement real-time data pipelines and event-driven architectures for high-throughput applications." },
      { title: "Microservices and Google Cloud Platform", content: "Hands-on experience deploying, scaling, and managing applications on Google Cloud Platform (GCP) utilizing Kubernetes Engine for containerized deployments." },
      { title: "Full-Stack Mentality", content: "Proficient in building dynamic and interactive user interfaces with ReactJS, fostering a full-stack development mindset for comprehensive solution delivery." },
      { title: "Technical Acumen", content: "Possesses strong problem-solving skills and the ability to design and implement elegant solutions to complex technical challenges." },
      { title: "Communication & Documentation", content: "Excellent written and verbal communication skills, adept at producing clear and concise technical documentation." },
    ],
  },
  {
    title: "Software Engineer",
    company: "i2c Inc.",
    date: "2019-2021",
    description: "i2c Inc. is a global leader in payment processing technology, enabling companies to issue cards, process payments and providing other financial solutions.",
    highlights: [
      { title: "Automation Tools", content: "Developed and implemented Python and Shell scripts to automate workflows, streamlining the reporting processes and optimizing efficiency. Tasks that took 3 days for 2 employees to gather data and generate reports were automated and calculated within minutes." },
      { title: "Online Transactions Issues Resolution", content: "Resolving multiple issues that occurred across different client scenarios in the payment processing." },
      { title: "Client Communication", content: "Effectively communicated technical information directly with clients, providing timely updates, status reports, and addressing technical inquiries." },
    ],
  },
];

const Experience = () => {
  return (
    <Container>
      <Box my={4} sx={{mt:1, mb:1}}>
        <Typography variant="h4" gutterBottom>
          Professional Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {job.company} - {job.date}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {job.description}
                  </Typography>
                  <Box mt={2}>
                    {job.highlights.map((highlight, idx) => (
                      <Accordion defaultExpanded={true} key={idx}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${idx}-content`}
                          id={`panel${idx}-header`}
                        >
                          <Typography variant="body1" fontWeight="bold">
                            {highlight.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2">
                            {highlight.content}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience;
