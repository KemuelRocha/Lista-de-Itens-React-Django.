import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}/`)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <ProductForm onAdd={handleAddProduct} />
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </Container>
    </div>
  );
};

export default App;
