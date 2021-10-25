import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export default class ProductsCart extends Component {
  render() {
    const { productCart } = this.props;
    return (
      <div className="box">
        <FaTrash className="fa-trash" />
        <img src={productCart.image} alt="" />
        <div className="content">
          <h3>{productCart.name}</h3>
          <div className="price">${productCart.price}</div>
          <input
            type="number"
            className="input-count"
            id="count"
            min="1"
            max="100"
            defaultValue="1"
          />
        </div>
      </div>
    );
  }
}
