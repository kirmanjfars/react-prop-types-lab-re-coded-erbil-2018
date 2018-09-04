// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
 
  render() {
    return (
      <div>
        
      </div>
    );
  }
}


Order.propTypes = {
  name: PropTypes.string.isRequired,
  product: PropTypes.string,
  hasWatermark: PropTypes.bool, 
  
  color: PropTypes.oneOf(['white', 
  'eggshell-white', 
    'salmon']).isRequired, 
      weight: (props, propName) => {
    const weight = props[propName];

    

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
 




export default Order;