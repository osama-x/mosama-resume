import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function Content() {
  return (
    <Routes>
      <Route path="/info" element={<Summary />} />
      <Route path="/" element={<Summary />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default Content;
