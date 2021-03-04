import React, { Component } from "react";
import { addNewProduct } from "../../services/productsApi";
import { ProductFormContainer } from "./productFormStyles";

const categories = ["fruits", "drinks", "clothes", "books"];

const initialState = {
  name: "",
  price: "",
  avatar: "",
  description: "",
  sale: false,
  category: categories[0],
};

class ProductForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState((prevState) => ({
        sale: !prevState.sale,
      }));
      return;
    }
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    addNewProduct(this.state);

    // this.props.addProduct(this.state);
    this.setState({
      ...initialState,
    });
  };

  render() {
    const { name, price, avatar, category, description } = this.state;
    return (
      <ProductFormContainer>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.onHandleChange}
              value={name}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              onChange={this.onHandleChange}
              value={price}
            />
          </label>
          <label>
            Avatar:
            <input
              type="text"
              name="avatar"
              onChange={this.onHandleChange}
              value={avatar}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              name="description"
              onChange={this.onHandleChange}
              value={description}
            />
          </label>
          <div className="options">
            <label>
              Category:
              <select
                name="category"
                onChange={this.onHandleChange}
                value={category}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Sale:
              <input
                type="checkbox"
                name="sale"
                checked={this.state.sale}
                onChange={this.onHandleChange}
              />
            </label>
          </div>
          <button type="submit">Add product</button>
        </form>
      </ProductFormContainer>
    );
  }
}

export default ProductForm;
