// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo */}
        <MuiLink
          component={Link}
          to="/"
          underline="none"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <img src="/logo192.png" alt="Logo" style={{ height: '40px' }} />
        </MuiLink>

        {/* Right: Navigation links */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <MuiLink component={Link} to="/projects" underline="none" color="inherit">
            Projects
          </MuiLink>
          <MuiLink component={Link} to="/blog" underline="none" color="inherit">
            Blog
          </MuiLink>
          <MuiLink component={Link} to="/contact" underline="none" color="inherit">
            Contact
          </MuiLink>
          <MuiLink component={Link} to="/about" underline="none" color="inherit">
            About
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

