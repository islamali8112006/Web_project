import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroONline from "../components/HeroONline";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/1e0ea34e-1db2-4d3a-bc53-fb77342c3029')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
  <>
    <HeroONline image="/images/hero-dogs.png" />

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </>
);

}

