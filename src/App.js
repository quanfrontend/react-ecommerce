import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsCart: [],
    };
    this.onAddClick = this.onAddClick.bind(this);
  }
  async componentDidMount() {
    const url = "https://5fa3d0d9f10026001618df85.mockapi.io/products";
    const call = await axios.get(url);
    this.setState({
      products: call.data,
    });
  }

  onAddClick(product) {
    return () => {
      const { productsCart } = this.state;
      this.setState({
        productsCart: [...productsCart, { ...product, inCart: 1 }],
      });
      console.log(productsCart);
    };
  }

  render() {
    const { products, productsCart } = this.state;
    return (
      <div>
        <Header productsCart={productsCart} />
        <Products products={products} onAddClick={this.onAddClick} />
      </div>
    );
  }
}
