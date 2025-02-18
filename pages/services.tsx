import { Typography, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const services = [
  'Professional Hypoallergenic Wash / Brush Out / Towel & Blow Out Dryer',
  'Nails trimming & Filing',
  'Ears cleaning',
  'Professional organic conditioner and moisturizer',
  'Mouth Wash and teeth brushing',
  'Expressed Glands',
  'Professional DeShedding',
  'Paws cleaning & Paws Trimming',
  'Sanitary/backside trimming',
  'Blueberry Facial',
];

const ServicesPage = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h2" fontWeight="bold" textAlign="center" mb={4}>
        Our Grooming Services
      </Typography>
      <List>
        {services.map((service, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ServicesPage;