import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactForm = styled(Paper)`
  padding: 2rem;
  background-color: #1a1a1a;
`;

const ContactInfo = styled(Paper)`
  padding: 2rem;
  height: 100%;
  background-color: #1a1a1a;
`;

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Контакти
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Зв'яжіться з нами для отримання консультації
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Box>
            <ContactForm>
              <Typography variant="h5" gutterBottom>
                Напишіть нам
              </Typography>
              <Box component="form" noValidate sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Ваше ім'я"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Телефон"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Повідомлення"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Надіслати
                </Button>
              </Box>
            </ContactForm>
          </Box>

          <Box>
            <ContactInfo>
              <Typography variant="h5" gutterBottom>
                Контактна інформація
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="h6">Адреса</Typography>
                    <Typography variant="body1" color="text.secondary">
                      м. Київ, вул. Юридична, 1
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="h6">Телефон</Typography>
                    <Typography variant="body1" color="text.secondary">
                      +380 44 123 45 67
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body1" color="text.secondary">
                      info@lelik-lawyer.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="h6">Графік роботи</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Пн-Пт: 9:00 - 18:00
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Сб-Нд: За попереднім записом
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ContactInfo>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact; 