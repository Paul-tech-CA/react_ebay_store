import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ProductForm from '../productForm/ProductForm';
import ProductList from '../productList/ProductList';

class ProductsPage extends Component {
  state = {};

  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/list`);
  }

  render() {
    return (
      <>
        <NavLink
          to={`${this.props.match.url}/list`}
          className="navLink"
          activeClassName="activeNavLink"
        >
          List
        </NavLink>
        <NavLink
          to={`${this.props.match.url}/form`}
          className="navLink"
          activeClassName="activeNavLink"
        >
          Form
        </NavLink>
        {/* <ProductList /> */}
        <Switch>
          <Route
            path={`${this.props.match.url}/list`}
            component={ProductList}
          />
          <Route
            path={`${this.props.match.url}/form`}
            component={ProductForm}
          />
        </Switch>
      </>
    );
  }
}

export default ProductsPage;
