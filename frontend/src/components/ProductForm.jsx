import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@mui/material';
import axios from 'axios';

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = async () => {
    const newProduct = {
      name: name,
      description: description,
      price: parseFloat(price),
    };

    const response = await axios.post('http://localhost:8000/api/products/', newProduct);

    const addedProduct = response.data;
    onAdd(addedProduct);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
      <CardContent>
        <TextField
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          fullWidth
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Adicionar Produto
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductForm;