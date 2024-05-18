import React from 'react';
import { CssBaseline, Box, Grid } from '@mui/material';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor:'primary.light' }}>
        <Header />
        <Grid container sx={{ flexGrow: 1, mt: 0 }}>
          <Grid item xs={12} sm={3} md={2} sx={{ bgcolor: 'primary.main', color:'primary', height: 'calc(100vh - 64px)', position: 'sticky', top: '64px' }}>
            <SideNav />
          </Grid>
          <Grid item xs={12} sm={9} md={10} sx={{ overflowY: 'auto', height: 'calc(100vh - 64px)', p: 2 }}>
            <Content />
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
