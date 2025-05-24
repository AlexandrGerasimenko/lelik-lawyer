import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import styled from 'styled-components';

const StyledTimeline = styled(Timeline)`
  padding: 0;
`;

const ExperienceCard = styled(Box)`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const experiences = [
  {
    year: '2020 - дотепер',
    title: 'Приватна адвокатська практика',
    description: 'Самостійна адвокатська практика з фокусом на цивільні та господарські справи'
  },
  {
    year: '2015 - 2020',
    title: 'Старший юрист в юридичній компанії',
    description: 'Керівництво командою юристів, ведення складних судових справ'
  },
  {
    year: '2010 - 2015',
    title: 'Юрист в адвокатському об\'єднанні',
    description: 'Спеціалізація на кримінальних та адміністративних справах'
  }
];

const achievements = [
  'Більше 500 успішно завершених справ',
  'Член Асоціації адвокатів України',
  'Регулярний учасник міжнародних юридичних конференцій',
  'Автор наукових публікацій з юридичної тематики'
];

const Experience: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Професійний досвід
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Більше 10 років успішної практики у сфері юриспруденції
      </Typography>

      <Box sx={{ mt: 6 }}>
        <StyledTimeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {exp.year}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {exp.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {exp.description}
                  </Typography>
                </ExperienceCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </StyledTimeline>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Досягнення
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 3, mt: 4 }}>
          {achievements.map((achievement, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1
              }}
            >
              <Typography variant="body1">
                {achievement}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Завжди відкритий до нових викликів
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Готовий допомогти вам у вирішенні будь-яких юридичних питань
        </Typography>
      </Box>
    </Container>
  );
};

export default Experience; 