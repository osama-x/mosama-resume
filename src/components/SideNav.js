import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListSubheader, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const sectionRoutes = {
  'Info': '/info',
  'Experience': '/experience',
  'Projects': '/projects',
  'Skills & Technologies': '/skills'
};

function SideNav() {
  const [selectedItem, setSelectedItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1);
    const section = Object.keys(sectionRoutes).find(key => sectionRoutes[key].slice(1) === path) || '';
    setSelectedItem(section);
  }, [location]);

  return (
    <Box sx={{ position: 'fixed', top: 180, width: '17%', bgcolor: 'primary.main', color: 'primary.text', overflowY: 'auto', height: 'calc(100vh - 165px)', boxShadow: 10 }}>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" sx={{ bgcolor: 'primary.main', color: 'primary.text', fontSize: '1.25rem', fontWeight: 'bold', mt: 1 }}>
            Sections
          </ListSubheader>
        }
      >
        {Object.keys(sectionRoutes).map((text) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={sectionRoutes[text]}
            selected={selectedItem === text}
            sx={{
              '&.Mui-selected': {
                bgcolor: 'primary.light', 
                color: 'primary.main', 
                borderRadius: 3,
                '&:hover': {
                  bgcolor: 'primary.light', 
                  color: 'primary.main'
                }
              },
              '&:hover': {
                bgcolor: 'primary.light', 
                color: 'primary.main', 
                borderRadius: 3,
              }
            }}
          >
            <ListItemText primary={text} sx={{ color: selectedItem === text ? 'primary.main' : 'primary.text' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideNav;
