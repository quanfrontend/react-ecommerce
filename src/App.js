/* eslint-disable no-dupe-class-members */
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
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  async componentDidMount() {
    let local = localStorage.getItem("item");
    if (local) {
      this.setState({
        productsCart: JSON.parse(local),
      });
    }

    const url = "https://5fa3d0d9f10026001618df85.mockapi.io/products";
    const call = await axios.get(url);
    this.setState({
      products: call.data,
    });
  }

  componentDidUpdate() {
    const { productsCart } = this.state;
    localStorage.setItem("item", JSON.stringify(productsCart));
  }

  onAddClick(product) {
    return () => {
      const { productsCart } = this.state;
      let value = productsCart.findIndex(
        (productCart) => productCart.id === product.id
      );
      if (value < 0) {
        product.inCart = 1;
        this.setState({
          productsCart: [...productsCart, product],
        });
      } else {
        productsCart[value].inCart = +productsCart[value].inCart + 1;
        this.setState({
          productsCart: [...productsCart],
        });
      }
    };
  }

  handleChange(id) {
    return (e) => {
      const { productsCart } = this.state;
      let value = productsCart.findIndex((item) => item.id === id);
      if (value >= 0) {
        productsCart[value].inCart = e.target.value;
        this.setState({
          productsCart: [...productsCart],
        });
      }
    };
  }

  handleDelete(id) {
    return (e) => {
      const { productsCart } = this.state;
      let value = productsCart.findIndex((item) => item.id === id);
      if (value >= 0) {
        productsCart.splice(value, 1);
        this.setState({
          productsCart: [...productsCart],
        });
      }
    };
  }

  render() {
    const { products, productsCart } = this.state;
    return (
      <div>
        <Header
          productsCart={productsCart}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
        <Products products={products} onAddClick={this.onAddClick} />
      </div>
    );
  }
}
