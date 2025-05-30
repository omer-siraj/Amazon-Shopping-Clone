import React from 'react';
import LayOut from '../../LayOut/LayOut';
import Carousel from '../../Carousel/CarouselEffect';
import Category from '../../Category/Category';
import Products from '../../Products/Products';

const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Products />
    </LayOut>
  );
};

export default Landing;
