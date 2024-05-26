import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PetCard({adoptionRequest}: any) {
   const {pet} = adoptionRequest;
    // console.log(adoptionRequest);
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={pet?.image}
        title="Pet Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adoption Date: 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Pet Details</Button>
       
      </CardActions>
    </Card>
  );
}
