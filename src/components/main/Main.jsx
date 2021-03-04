import React from "react";

import { MainContainer } from "./MainStyles";
import Product from "./product/Product";
import { Route, Switch } from "react-router-dom";
import ProductList from "../productList/ProductList";
import ProductForm from "../productForm/ProductForm";
import Home from "../home/Home";

const Main = () => {
  return (
    <MainContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productslist" component={ProductList} />
        <Route path="/productsform" component={ProductForm} />
      </Switch>

      {/* <Product /> */}
    </MainContainer>
  );
};

export default Main;
