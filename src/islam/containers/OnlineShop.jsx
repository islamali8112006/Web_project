import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroONline from "../components/HeroONline";
import OnlineIntro from "../components/OnlineIntro";
import { Box } from "@mui/material";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/1906ee4a-7d6b-44fc-bde5-7a13015a63b5')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box component="main" sx={{ flex: 1, pb: '150px' }}> 
      <HeroONline image="/images/hero-dogs.png" />
      <OnlineIntro />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          p: -2,
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
