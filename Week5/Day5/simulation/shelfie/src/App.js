import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get("/api/product")
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard getProducts={this.state.products} />
        <Form />
      </div>
    );
  }
}
