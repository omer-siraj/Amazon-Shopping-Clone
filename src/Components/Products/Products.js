import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';
import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.products__container}>
      {products.map((singleProduct) => (
        <ProductsCard
          key={singleProduct.id}
          product={singleProduct}
          renderAdd={true}
        />
      ))}
    </section>
  );
};

export default Products;
