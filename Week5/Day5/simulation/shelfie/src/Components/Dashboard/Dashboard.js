import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mappedProducts = this.props.getProducts;
    return (
      <div className="allProducts">
        {mappedProducts.map(product => {
          return (
            <div key={product.id}>
              <ol className="product" id={product.id}>
                <img>{product.img}</img>
                <div className="description">
                  <a>{product.name}</a>
                  <p>{product.price}</p>
                </div>
              </ol>
            </div>
          );
        })}
        Dashboard
        <Product />
      </div>
    );
  }
}
