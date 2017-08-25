import React, { Component } from 'react';
import './index.css';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
