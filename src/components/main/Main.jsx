import React from 'react';

import { MainContainer } from './MainStyles';
import Product from './product/Product';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../productList/ProductList';
import ProductForm from '../productForm/ProductForm';
import Home from '../home/Home';
import AboutPage from '../aboutPage/AboutPage';
import ProductsPage from '../productsPage/ProductsPage';

const Main = () => {
  return (
    <MainContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/products/list" component={ProductList} />
        <Route path="/products/form" component={ProductForm} /> */}
        <Route path="/products" component={ProductsPage} />
      </Switch>

      {/* <Product /> */}
    </MainContainer>
  );
};

export default Main;
