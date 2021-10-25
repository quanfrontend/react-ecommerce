import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Cart from "./Cart";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.navBar = React.createRef();
    this.shoppingCart = React.createRef();

    this.showMenu = this.showMenu.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  showMenu() {
    this.navBar.current.classList.toggle("active");
    this.shoppingCart.current.classList.remove("active");
  }

  showCart() {
    this.shoppingCart.current.classList.toggle("active");
    this.navBar.current.classList.remove("active");
  }

  render() {
    const { productsCart } = this.props;
    return (
      <header className="header">
        <button href="#" className="logo">
          Javascript
        </button>
        <nav className="navbar" ref={this.navBar}>
          <a href="#home">home</a>
          <a href="#home">products</a>
          <a href="#home">categorys</a>
          <a href="#home">blog</a>
          <a href="#home">about</a>
        </nav>
        <div className="icons">
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={this.showCart}
          >
            <FaShoppingCart />
            <div className="cart-number" id="cart-number">
              0
            </div>
          </div>
          <div className="fas fa-bars" id="menu-toggle" onClick={this.showMenu}>
            <FaBars />
          </div>
        </div>
        <div className="shopping-cart" ref={this.shoppingCart}>
          <Cart productsCart={productsCart} />
        </div>
      </header>
    );
  }
}
