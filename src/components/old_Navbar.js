import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountMenu from './AccountMenu';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MuiLink component={Link} to="/profile" color="inherit" underline="none">
            My Profile
          </MuiLink>
          <MuiLink component={Link} to="/projects" color="inherit" underline="none">
            My Projects
          </MuiLink>
          <MuiLink component={Link} to="/contact" color="inherit" underline="none">
            Contact
          </MuiLink>
        </Box>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


