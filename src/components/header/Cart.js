import React, { Component } from "react";
import ProductsCart from "./ProductsCart";

export default class Cart extends Component {
  render() {
    const { productsCart } = this.props;
    return (
      <div className="Cart">
        <div id="shopping-cart">
          {productsCart.map((productCart) => (
            <ProductsCart key={productCart.id} productCart={productCart} />
          ))}
        </div>
        <div className="total">
          total : $<span id="total">0.00</span>
        </div>
        <div>
          <button href="#" className="checkout">
            checkout
          </button>
        </div>
      </div>
    );
  }
}
