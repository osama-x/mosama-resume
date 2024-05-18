import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const skills = ["Python", "Backend", "Microservices", "Neo4j", "Elasticsearch", "Mongodb", "Flask/Django", "Kafka", "React", "Kubernetes"];

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 120;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentSkill = skills[skillIndex];
      let updatedText = displayedText;

      if (isDeleting) {
        updatedText = currentSkill.substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
      } else {
        updatedText = currentSkill.substring(0, charIndex + 1);
        setCharIndex(charIndex + 1);
      }

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentSkill) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && updatedText === '') {
        setSkillIndex((skillIndex + 1) % skills.length);
        setCharIndex(0);
        setTimeout(() => setIsDeleting(false), pauseDuration);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, charIndex, isDeleting, skillIndex, typingSpeed]);

  return (
    <Box
      sx={{
        display: 'inline-block',
        bgcolor: 'primary.blueish',
        color: 'primary.text',
        borderWidth: '20px',
        borderColor: '#01FEBB',
        px: 2,
        py: 1,
        borderRadius: '16px',
        minWidth: '250px',
        minHeight: '50px',
        textAlign: 'center',
        fontSize: '1rem',
    }}
    >
      <Typography variant="h5" component="span">
        {displayedText}
      </Typography>
    </Box>
  );
};

export default TypingEffect;
