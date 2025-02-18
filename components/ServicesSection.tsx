import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

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

const ServicesSection = () => {
  return (
    <Box id="services" sx={{ py: 6, px: 3, bgcolor: 'background.default' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center" mb={4}>
          Our All-Inclusive Grooming Package
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={service} />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;