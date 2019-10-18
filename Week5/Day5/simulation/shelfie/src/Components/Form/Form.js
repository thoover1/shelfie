import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      img: ""
    };
    this.postProducts = this.postProducts.bind(this);
  }

  render() {
    return <div>Form</div>;
  }
}
