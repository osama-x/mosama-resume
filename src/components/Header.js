import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Box, Avatar, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

// Import your image
import ProfilePic from '../assets/m_osama.jpeg';

// Import TypingEffect component
import TypingEffect from './TypingEffect';

function Header() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary', color: 'textcolor', boxShadow: 'none', boxShadow: 5 }}>
      <Toolbar>
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Avatar Section */}
            <Grid item xs={12} sm="auto" sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 2, sm: 0 } }}>
              <Avatar alt="Muhammad Osama" src={ProfilePic} sx={{ width: 140, height: 140, mr: 10, mt: 3, mb: 3, ml: -3}} />
            </Grid>

            {/* Information Section */}
            <Grid item xs>
              <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h3" sx={{ color: 'grey.700', mb: 1 }}>
                  <span style={{ color: '#757575' }}>Muhammad </span>
                  <span style={{ color: '#1976d2' }}>Osama</span>
                </Typography>
                <Typography variant="h6" color="grey.500">
                  Senior Software Engineer (5+ years)
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        <PhoneIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          +92 321 4210257
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        <EmailIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          amasu.r7@gmail.com
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        <LinkedInIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          linkedin.com/in/muhamad-osama-dev
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        <HomeIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          Lahore, Pakistan
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            {/* Typing Effect Section */}
            <Grid item xs={12} sm="auto" sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
              <TypingEffect />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
