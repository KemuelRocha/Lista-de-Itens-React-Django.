import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (productId) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${productId}/`)
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
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
