import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled(Button)`
  color: #ffffff !important;
  margin: 0 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff !important;
`;

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { path: '/', label: 'Головна' },
    { path: '/services', label: 'Послуги' },
    { path: '/experience', label: 'Досвід' },
    { path: '/reviews', label: 'Відгуки' },
    { path: '/contact', label: 'Контакти' }
  ];

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }}>
          <StyledLink to="/">
            ЛЕЛІК
          </StyledLink>
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.path} 
                  onClick={handleClose}
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {menuItems.map((item) => (
              <StyledLink key={item.path} to={item.path}>
                <NavButton>
                  {item.label}
                </NavButton>
              </StyledLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 