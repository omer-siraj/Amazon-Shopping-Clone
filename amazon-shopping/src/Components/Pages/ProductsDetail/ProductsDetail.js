import React, { useEffect, useState } from 'react';
import classes from './ProductsDetail.module.css';
import LayOut from '../../LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductsCard from '../../Products/ProductsCard';
import Loader from '../../Loader/Loader';

const ProductsDetail = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProducts] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
};

export default ProductsDetail;
