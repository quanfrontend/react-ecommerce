import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { product, onAddClick } = this.props;
    return (
      <div className="product">
        <div className="product-img">
          <button href="#" className="product-link">
            <img src={product.image} alt="" />
          </button>
          <div className="add-cart" onClick={onAddClick}>
            Add to cart
          </div>
        </div>
        <div className="product-content">
          <div className="title">{product.name}</div>
          <div className="bottom">
            <div className="price">${product.price}</div>
            <div className="quantity">Đã bán 2k</div>
          </div>
        </div>
      </div>
    );
  }
}
