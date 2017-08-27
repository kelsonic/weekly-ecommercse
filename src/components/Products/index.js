// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Externals
import ProductsShell from '../ProductsShell';
import Product from '../Product';
// Internals
import './index.css';


const Products = ({ shelling, products }) => {
  if (shelling) {
    return <ProductsShell />;
  }

  const truncateOptions = { length: 15, separator: /,? +/ };
  return (
    <div className="products">
      {map(products, ({ title, description, src }) => (
        <Product
          title={title}
          description={description}
          src={src}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
  shelling: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export default Products;
