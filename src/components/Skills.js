import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const skills = [
  {
    category: 'Back-End Development',
    details: [
      { highlight: 'Flask & Django', description: 'Built high-performance RESTful and GraphQL Microservices APIs for efficient data exchange. Utilized Indexing and caching techniques to optimize the data serving processing. Converted the code base to CQRS layers for maintainability.' },
      { highlight: 'Apache Kafka', description: 'Designed and implemented real-time data pipelines and event-driven architectures for high-throughput applications. Engineered efficient pipelines utilizing partitioning and other Kafka consuming parameters to ensure reliability.' },
      { highlight: 'Neo4j (Cypher)', description: 'Worked with graph database to store millions of entities knowledgebase and performing complex analysis queries. Optimizing the efficiency of database to use minimum resources along.' },
      { highlight: 'MongoDB', description: 'Adept at managing and manipulating data within the flexible NoSQL schema of MongoDB.' },
      { highlight: 'Elasticsearch', description: 'Leveraged Elasticsearch\'s advanced search functionalities to enable efficient retrieval and analysis of large datasets. Configuring data storage techniques for better and fast retrievals.' },
      { highlight: 'Redis', description: 'Employed Redis for high-performance caching and real-time data management.' },
      { highlight: 'Relational Databases (SQL)', description: 'Possess strong understanding of relational databases like PostgreSQL, Informix, MySQL for structured data storage.' },
      { highlight: 'Secondary Languages', description: 'Java, Golang, Javascript, C++.' }
    ]
  },
  {
    category: 'Front-End Development',
    details: [
      { highlight: 'React', description: 'Built dynamic and interactive user interfaces with React, ensuring a captivating user experience.' },
      { highlight: 'Angular', description: 'Hands-on experience with Angular.' }
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    details: [
      { highlight: 'Docker & Kubernetes', description: 'Deployed, scaled, and managed containerized applications using Docker and Kubernetes, promoting a streamlined development workflow.' }
    ]
  },
  {
    category: 'Additional Skills',
    details: [
      { highlight: 'Email Processing & Sendgrid', description: 'Automated email workflows using Sendgrid for streamlined communication.' },
      { highlight: 'Linux & Shell Scripting', description: 'Comfortable in a Linux environment and utilize Shell scripting for automation tasks.' },
      { highlight: 'Design Patterns', description: 'Utilize design patterns to create well-structured, maintainable, and scalable codebase.' },
      { highlight: 'Vulnerability Management & Security', description: 'Deep understanding of Vulnerability Assessment through CVEs, CVSS parameters and criticality on machines, and their remediation.' },
      { highlight: 'Code Profiling', description: 'Employ code profiling techniques to identify performance bottlenecks and optimize code for optimal resource utilization. (pyinstrument)' }
    ]
  }
];

const Skills = () => {
  return (
    <Container>
      <Box my={4} sx={{ mt: 1, mb: 1 }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        {skills.map((skill, index) => (
          <Accordion defaultExpanded={true} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6"><b>{skill.category}</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              {skill.details.map((detail, detailIndex) => (
                <Typography key={detailIndex} variant="body2" paragraph>
                  <b>{detail.highlight}</b>: {detail.description}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
