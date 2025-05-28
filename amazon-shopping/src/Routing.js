import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing/Landing';
import SignIn from './Components/Pages/Auth/Signup';
import Payments from './Components/Pages/Payments/Payments';
import Orders from './Components/Pages/Orders/Orders';
import Cart from './Components/Pages/Cart/Cart';
import Results from './Components/Pages/Results/Results';
import ProductsDetail from './Components/Pages/ProductsDetail/ProductsDetail';

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<SignIn />} />
      <Route path='/payments' element={<Payments />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/category/:categoryName' element={<Results />} />
      <Route path='/products/:productId' element={<ProductsDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </Router>
);

export default Routing;
