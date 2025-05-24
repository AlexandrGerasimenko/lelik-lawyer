import React from 'react';
import { Container, Typography, Box, Card, CardContent, Avatar, Rating } from '@mui/material';
import styled from 'styled-components';

const ReviewCard = styled(Card)`
  height: 100%;
  background-color: #1a1a1a;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const reviews = [
  {
    name: 'Олена К.',
    role: 'Клієнт',
    rating: 5,
    text: 'Дуже вдячна Леліку за професійний підхід до моєї справи. Все було вирішено швидко та ефективно.',
    avatar: 'https://source.unsplash.com/random/100x100/?woman'
  },
  {
    name: 'Микола П.',
    role: 'Клієнт',
    rating: 5,
    text: 'Професіонал своєї справи. Допоміг вирішити складну юридичну ситуацію, яка тривала більше року.',
    avatar: 'https://source.unsplash.com/random/100x100/?man'
  },
  {
    name: 'Тетяна М.',
    role: 'Клієнт',
    rating: 5,
    text: 'Чудовий адвокат! Все пояснює доступно, завжди на зв\'язку. Рекомендую всім!',
    avatar: 'https://source.unsplash.com/random/100x100/?woman'
  },
  {
    name: 'Андрій В.',
    role: 'Клієнт',
    rating: 5,
    text: 'Дякую за успішне вирішення мого бізнес-питання. Професіоналізм на найвищому рівні.',
    avatar: 'https://source.unsplash.com/random/100x100/?man'
  },
  {
    name: 'Марія С.',
    role: 'Клієнт',
    rating: 5,
    text: 'Дуже задоволена роботою. Все було зроблено вчасно та якісно. Рекомендую!',
    avatar: 'https://source.unsplash.com/random/100x100/?woman'
  },
  {
    name: 'Олександр Д.',
    role: 'Клієнт',
    rating: 5,
    text: 'Професійний підхід та індивідуальна увага до кожної деталі. Дякую за допомогу!',
    avatar: 'https://source.unsplash.com/random/100x100/?man'
  }
];

const Reviews: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Відгуки клієнтів
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Що говорять про нас наші клієнти
      </Typography>

      <Box sx={{ mt: 6 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4 }}>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" component="div">
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.role}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" color="text.secondary">
                  "{review.text}"
                </Typography>
              </CardContent>
            </ReviewCard>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Залиште свій відгук
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ваша думка важлива для нас
        </Typography>
      </Box>
    </Container>
  );
};

export default Reviews; 