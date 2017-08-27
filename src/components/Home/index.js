// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
// Externals
import Products from '../Products';
import ErrorMessage from '../ErrorMessage';
// Internals
import './index.css';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: false,
      products: [],
      shelling: false,
      searchTerm: '',
      requestIsEnabled: true,
    };
  }

  componentDidMount() {
    // const urlToFetchCoffeeProducts = '';
    // this.fetchProducts(urlToFetchCoffeeProducts);
  }

  fetchProducts = (url) => {
    fetch(url)
      .catch((error) => {
        console.log(error)
        // Change our state to be the error handling state.
        this.setState({ error: true, shelling: false });
      })
      .then((res) => res.json())
      .then((products) => {
        this.setState({ products, shelling: false });
      })
  }

  onChangeHandler = (event) => {
    if (this.state.requestIsEnabled && !isEmpty(event.target.value)) {
      // Enable shelling for network request and disable future network requests for 1 second.
      this.setState({ requestIsEnabled: false, shelling: true });
      setTimeout(() => this.setState({ requestIsEnabled: true }), 1000);
      // Make the network request to Amazon.
      const urlWithSearchTerm = `${encodeURI(event.target.value)}`;
      this.fetchProducts(urlWithSearchTerm);
    }
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="home">
        <div className="landing-background">
          <nav>
            <NavLink
              activeClassName="selected"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </nav>
          <h1 className="title">Brad's Beans</h1>
          <ErrorMessage error={this.state.error} />
          <input
            type="text"
            placeholder="With my mind on my coffee and my coffee on my mind..."
            onChange={this.onChangeHandler}
            value={this.state.searchTerm}
          />
        </div>
        <Products
          shelling={this.state.shelling}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default Home;
