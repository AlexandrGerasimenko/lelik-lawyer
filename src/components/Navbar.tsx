import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }}>
          <StyledLink to="/">
            ЛЕЛІК
          </StyledLink>
        </Typography>
        <Box>
          <StyledLink to="/">
            <NavButton>
              Головна
            </NavButton>
          </StyledLink>
          <StyledLink to="/services">
            <NavButton>
              Послуги
            </NavButton>
          </StyledLink>
          <StyledLink to="/experience">
            <NavButton>
              Досвід
            </NavButton>
          </StyledLink>
          <StyledLink to="/reviews">
            <NavButton>
              Відгуки
            </NavButton>
          </StyledLink>
          <StyledLink to="/contact">
            <NavButton>
              Контакти
            </NavButton>
          </StyledLink>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 