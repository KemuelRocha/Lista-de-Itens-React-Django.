import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const ProductItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Preço: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Deletar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
