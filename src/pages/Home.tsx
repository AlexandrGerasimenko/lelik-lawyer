import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled(Box)`
  background-image: url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 150px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
    z-index: 1;
  }
`;

const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 2;
`;

const StyledButton = styled(Button)`
  margin: 20px;
  padding: 12px 30px;
  font-size: 1.1rem;
  background-color: #ffffff;
  color: #000000;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection>
        <ContentWrapper>
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              ЛЕЛІК
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              Адвокатська практика
            </Typography>
            <Typography variant="h6" component="p" sx={{ mb: 4 }}>
              Професійна юридична допомога для захисту ваших прав та інтересів
            </Typography>
            <Box>
              <StyledLink to="/services">
                <StyledButton variant="contained">
                  Наші послуги
                </StyledButton>
              </StyledLink>
              <StyledLink to="/contact">
                <StyledButton variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                  Зв'язатися з нами
                </StyledButton>
              </StyledLink>
            </Box>
          </Container>
        </ContentWrapper>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Чому обирають нас?
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4 }}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Професіоналізм
            </Typography>
            <Typography>
              Більше 10 років досвіду у сфері юриспруденції
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Індивідуальний підхід
            </Typography>
            <Typography>
              Кожна справа розглядається з урахуванням усіх особливостей
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Конфіденційність
            </Typography>
            <Typography>
              Гарантуємо повну конфіденційність інформації
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 