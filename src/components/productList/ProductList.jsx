import React, { Component } from 'react';
import { ProductListCont } from './ProductStyles';
import notFoundImg from '../../images/notfound.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { getProducts } from '../../services/productsApi';
import { deleteProduct } from '../../redux/products/products-actions';
import Modal from '../modal/Modal.hoc';
import { connect } from 'react-redux';

class ProductList extends Component {
  state = {
    currentProduct: {},
    isModalOpen: false,
  };

  componentDidMount() {
    getProducts().then(products => this.setState({ products }));
  }

  onDelete = event => {
    const { id } = event.currentTarget.dataset;
    this.props.deleteProduct(id);
    this.onClose();
    // deleteProduct(id).then(() => {
    //   this.setState(prevState => ({
    //     products: [...prevState.products.filter(product => product.id !== id)],
    //   }));
    // });
  };

  onOpenModal = event => {
    const { id } = event.target.dataset;
    this.setState({
      currentProduct: this.props.products.find(product => product.id === id),
      isModalOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { products } = this.props;
    const {
      id,
      avatar,
      name,
      price,
      description,
      category,
    } = this.state.currentProduct;
    return (
      <>
        <ProductListCont>
          {products.map(
            ({ category, description, id, name, price, sale, avatar }) => {
              return (
                <li className="product_item" key={id}>
                  <img
                    className="notfound_img"
                    src={avatar ? avatar : notFoundImg}
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p className="product_list_text">
                    <b>Price:</b> {price}
                  </p>
                  {/* <p className="product_list_text">
                    <b>Description:</b> {description}
                  </p> */}
                  <p className="product_list_text">
                    <b>Sale:</b> {sale ? 'Enabled' : 'Disabled'}
                  </p>
                  {/* <p className="product_list_text">
                    <b>Category:</b> {category}
                  </p> */}
                  <div className="buttons">
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      data-id={id}
                      onClick={this.onDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <button
                      type="button"
                      onClick={this.onOpenModal}
                      data-id={id}
                    >
                      {' '}
                      Details
                    </button>
                  </div>
                </li>
              );
            },
          )}
        </ProductListCont>
        {this.state.isModalOpen && (
          <Modal onClose={this.onClose} isOpen={this.state.isModalOpen}>
            <>
              <img
                className="notfound_img"
                src={avatar ? avatar : notFoundImg}
                alt={name}
              />
              <h3>{name}</h3>
              <p className="product_list_text">
                <b>Price:</b> {price}
              </p>
              <p className="product_list_text">
                <b>Description:</b> {description}
              </p>
              {/* <p className="product_list_text">
                <b>Sale:</b> {sale ? 'Enabled' : 'Disabled'}
              </p> */}
              <p className="product_list_text">
                <b>Category:</b> {category}
              </p>

              <IconButton
                aria-label="delete"
                color="primary"
                data-id={id}
                onClick={this.onDelete}
              >
                <DeleteIcon />
              </IconButton>
            </>
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.productItems,
});

export default connect(
  mapStateToProps,
  { deleteProduct },
)(ProductList);
