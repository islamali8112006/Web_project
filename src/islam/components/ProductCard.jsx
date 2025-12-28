import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function ProductCard({ product }) {
  return (
    <Card sx={{
       maxWidth: 250,
   
        height: 400,          // يخلي كل الكروت نفس الارتفاع
        display: 'flex',
        flexDirection: 'column',
      
     }}>
      <CardMedia
  
        component="img"
        height="200"

        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5"sx={{ fontFamily: "Glyphicons Halflings", }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{ fontFamily: "Glyphicons Halflings", }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
     
        
      
    </Card>
  );
}

