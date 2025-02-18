import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BrushIcon from '@mui/icons-material/Brush';
import HealingIcon from '@mui/icons-material/Healing';
import WavesIcon from '@mui/icons-material/Waves';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CleanHandsIcon from '@mui/icons-material/CleanHands';

const services = [
  { text: 'Professional Hypoallergenic Wash / Brush Out / Towel & Blow Out Dryer', icon: WavesIcon },
  { text: 'Nails trimming & Filing', icon: ContentCutIcon },
  { text: 'Ears cleaning', icon: HealingIcon },
  { text: 'Professional organic conditioner and moisturizer', icon: SpaIcon },
  { text: 'Mouth Wash and teeth brushing', icon: CleanHandsIcon },
  { text: 'Expressed Glands', icon: PetsIcon },
  { text: 'Professional DeShedding', icon: BrushIcon },
  { text: 'Paws cleaning & Paws Trimming', icon: FavoriteIcon },
  { text: 'Sanitary/backside trimming', icon: StarIcon },
  { text: 'Blueberry Facial', icon: CheckCircleIcon },
];

const ServicesSection = () => {
  return (
    <Box id="services" sx={{ py: 8, px: 3, bgcolor: '#DCDCDC' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
        Our All-Inclusive Grooming Package
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={6}>
        At Fluffy Pet Wash, we provide **everything** your furry friend needs to look and feel their best.
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: 4, padding: 3, borderRadius: '15px', bgcolor: 'white' }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="primary" textAlign="center" mb={3}>
                What&apos;s Included:
              </Typography>
              <List>
                {services.map((service, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <service.icon sx={{ color: '#038B95', fontSize: 30 }} /> {/* Custom color for icons */}
                    </ListItemIcon>
                    <ListItemText primary={service.text} primaryTypographyProps={{ fontWeight: 'bold', color: 'text.primary' }} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesSection;