// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
// Externals
import Products from '../Products';
import ErrorMessage from '../ErrorMessage';
import { client } from '../../api/amazon';
// Internals
import './index.css';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: false,
      products: [],
      shelling: true,
      searchTerm: '',
      requestIsEnabled: true,
    };
  }

  componentDidMount() {
    client.itemSearch({
      artist: 'Radiohead',
      searchIndex: 'Music',
      sort: 'relevancerank',
      itemPage: 1,
      availability: 'Available',
      responseGroup: 'OfferFull,Large,Images',
    }, function(err, results, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);  // products (Array of Object)
        console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
      }
    });
  }

  fetchProducts = (url) => {
    fetch(url)
      .catch((error) => {
        console.log(error)
        this.setState({ error: true, shelling: false });
      })
      .then((res) => res.json())
      .then((products) => {
        this.setState({ products, shelling: false });
      })
  }

  onChangeHandler = (event) => {
    if (this.state.requestIsEnabled && !isEmpty(event.target.value)) {
      this.setState({ requestIsEnabled: false, shelling: true });
      const urlWithSearchTerm = `https://amazon.com/${encodeURI(event.target.value)}`;
      this.fetchProducts(urlWithSearchTerm);
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
          <div className="nav">
            <h1 className="title">Brad's Beans</h1>
            <NavLink
              activeClassName="selected"
              className="nav-link"
              to="/about"
            >
              About his beans...
            </NavLink>
          </div>
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
