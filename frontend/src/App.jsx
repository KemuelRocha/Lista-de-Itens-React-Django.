import React, { useEffect, useState } from 'react';
import { Container, Grid, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Cor primária
      },
      background: {
        default: '#f5f5f5', // Cor de fundo da página
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '5rem', padding: '2rem', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} sx={{ width: '40%' }}>
            <ProductForm onAdd={handleAddProduct} />
          </Grid>
          <Grid item xs={12} md={7} sx={{ width: '60%' }}>
            <ProductList products={products} onDelete={handleDeleteProduct} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
