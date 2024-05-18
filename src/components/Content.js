import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Summary from './Summary';

function Content() {
  return (
    <Routes>
      <Route path="/info" element={<Summary />} />
      <Route path="/" element={<Summary />} />
    </Routes>
  );
}

export default Content;
