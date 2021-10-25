import React, { Component } from "react";
import Product from "./Product";

export default class Products extends Component {
  render() {
    const { products, onAddClick } = this.props;
    return (
      <section className="products" id="products">
        <div className="products-box" id="products-list">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddClick={onAddClick(product)}
            />
          ))}
        </div>
      </section>
    );
  }
}
