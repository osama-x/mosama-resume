import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const projects = [
  {
    title: "Architected and Developed High-Performance Asset & Identity Inventory System",
    challenge: "Build a comprehensive inventory system to process millions of daily records for endpoint, network, human and cloud assets data from network, alerts, and security appliances and store in a graph (Neo4j) without driving up costs.",
    solution: "Led the redesign and implementation of a high-performance architecture. This involved Stream Processing using Apache Kafka to efficiently process and ingest the massive data volume in real-time. Intelligent Indexing & Caching to optimized Neo4j performance by implementing strategic indexing and caching techniques, minimizing database strain and reducing costs significantly.",
  },
  {
    title: "Risk Based Vulnerability Management",
    description: "Designed, implemented and led a risk identification project where we identified the risk in user environment by analyzing vulnerabilities across the systems. Built a comprehensive knowledgebase of CVEs and other vulnerabilities information from online crawlers and from vulnerability scanning appliances to identify the vulnerable machines and risk in the environment.",
  },
  {
    title: "Achieved 15x Search Performance Improvement",
    description: "For analysis and searching of complex data from across different microservices using different databases and merging the information from all to give Jira’s JQL like advanced query results took even more than tens of seconds. Successfully implemented a real-time indexing technique and data update events using Kafka to index all the merged data into Elasticsearch indices and provided the Query Language interface to fetch 100s of records in less than a second.",
  },
  {
    title: "Email-Based & Slack Collaboration System",
    description: "Built platform-agnostic chat with persistent history and chat threads. Parsed email headers for messages correlation and Sendgrid for outgoing emails and thread management. Slack channels were also added as an option to communicate across platforms.",
  },
  {
    title: "Content Management System",
    challenge: "A content management system was required to build organizations data. The researchers will add the content to the system and that would be added to the product after approvals. The data was highly relational with changing attributes for each entity.",
    solution: "Used the Neo4j DB to store highly relational and changing data. Implemented the front-end in React with Material UI and used GraphQL to communicate with the back-end developed in Django. MongoDB was used to store the unapproved data.",
  },
  {
    title: "Implemented Graph Data Syncing Across GCP Clusters",
    challenge: "Synchronize highly complex graph data across multiple Google Cloud Platform (GCP) clusters and services for real-time analysis. Neo4j lacked native support for this functionality at the time.",
    solution: "Used Neo4j Streams for real-time data updates. These updates were then transmitted across GCP clusters in collaboration with DevOPS using Apache Kafka, a high-throughput distributed streaming platform. Custom data sinks were deployed within each cluster to efficiently receive and process the graph data according to its specific needs.",
  },
];

const Projects = () => {
  return (
    <Container>
      <Box my={4} sx={{mt:1, mb:3}}>
        <Typography variant="h4" gutterBottom>
          Major Projects
        </Typography>
        {projects.map((project, index) => (
          <Accordion defaultExpanded={true} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h7"><b>{project.title}</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              {project.challenge && (
                <>
                  <Typography variant="subtitle1"  paragraph>
                    <b>Challenge:</b> {project.challenge}
                  </Typography>
                  <Typography variant="subtitle1"  paragraph>
                    <b>Solution:</b> {project.solution}
                  </Typography>
                </>
              )}
              {!project.challenge && (
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
