// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';
// Internals
import './index.css';


const Product = ({ title, description, src }) => (
  <div className="product">
    <img alt={title} src={src} />
    <span className="title">{title}</span>
    <span className="description">
      {truncate(description, { length: 15, separator: /,? +/ })}
    </span>
  </div>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Product;
