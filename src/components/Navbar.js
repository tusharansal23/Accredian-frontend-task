import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme, active }) => ({
  color: active ? 'green' : 'blue',
  '&:hover': {
    color: 'red'
  },
}));

const Navbar = () => {
  const navLinks = [
    { name: 'Home', active: false },
    { name: 'Courses', active: false },
    { name: 'Refer & Earn', active: true },
    { name: 'Contact Us', active: false },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'blue' }}>
          Your Company
        </Typography>
        <Box>
          {navLinks.map((link, index) => (
            <StyledButton key={index} active={link.active ? 1 : 0}>
              {link.name}
            </StyledButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
