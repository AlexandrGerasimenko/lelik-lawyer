import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import styled from 'styled-components';

const ServiceCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  background-color: #1a1a1a;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const services = [
  {
    title: 'Цивільні справи',
    description: 'Захист прав та інтересів у цивільних спорах, спадкові справи, житлові питання',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Кримінальні справи',
    description: 'Захист прав обвинувачених, представництво інтересів потерпілих',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Господарські справи',
    description: 'Супровід бізнесу, корпоративні спори, банкрутство',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Сімейні справи',
    description: 'Розлучення, аліменти, визначення місця проживання дітей',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Адміністративні справи',
    description: 'Спори з державними органами, оскарження рішень',
    image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Юридичний консалтинг',
    description: 'Правові консультації, складання договорів, перевірка документів',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Services: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Наші послуги
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Професійна юридична допомога у різних сферах права
      </Typography>

      <Box sx={{ 
        mt: 4,
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 4
      }}>
        {services.map((service, index) => (
          <Box key={index}>
            <ServiceCard>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </ServiceCard>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Не знайшли потрібну послугу?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Зв'яжіться з нами для отримання детальної консультації
        </Typography>
      </Box>
    </Container>
  );
};

export default Services; 