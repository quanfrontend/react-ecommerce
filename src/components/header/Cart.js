import React, { Component } from "react";
import ProductsCart from "./ProductsCart";

export default class Cart extends Component {
  render() {
    const { productsCart, handleChange, handleDelete } = this.props;
    return (
      <div className="Cart">
        <div id="shopping-cart">
          {productsCart.map((productCart) => (
            <ProductsCart
              key={productCart.id}
              productCart={productCart}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="total">
          total : $
          <span id="total">
            {productsCart.reduce((sum, num) => {
              return sum + num.inCart * num.price;
            }, 0)}
          </span>
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
