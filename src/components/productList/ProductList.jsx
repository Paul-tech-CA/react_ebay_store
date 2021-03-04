import React, { Component } from 'react';
import { ProductListCont } from './ProductStyles';
import notFoundImg from '../../images/notfound.png';
import axios from 'axios';
import { deleteProduct } from '../../services/productsApi';

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_DATA_BASE_BASEURL}/products.json`)
      // .then((response) => this.setState({ products: response }));
      .then(response => {
        if (response.data) {
          const result = Object.keys(response.data).map(key => ({
            id: key,
            ...response.data[key],
          }));
          this.setState({ products: result });
        } else {
          return;
        }
      });
  }

  onDelete = event => {
    const { id } = event.target.dataset;
    deleteProduct(id).then(() => {
      this.setState(prevState => ({
        products: [...prevState.products.filter(product => product.id !== id)],
      }));
    });
  };

  render() {
    const { products } = this.state;
    return (
      <ProductListCont>
        <h2>Products List</h2>
        {products.map(
          ({ avatar, category, description, id, name, price, sale }) => {
            return (
              <li className="product_item" key={id}>
                <img
                  className="notfound_img"
                  src={notFoundImg}
                  alt="Image Not Found"
                />
                <h3>{name}</h3>
                <p>
                  <b>Price:</b> {price}
                </p>
                <p>
                  <b>Description:</b> {description}
                </p>
                <p>
                  <b>Sale:</b> {sale}
                </p>
                <p>
                  <b>Category:</b> {category}
                </p>
                <button type="button" data-id={id} onClick={this.onDelete}>
                  Delete
                </button>
              </li>
            );
          },
        )}
      </ProductListCont>
    );
  }
}

export default ProductList;
